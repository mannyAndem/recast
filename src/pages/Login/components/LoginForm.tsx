import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputGroup from "../../../components/ui/InputGroup";
import Button from "../../../components/ui/Button";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const handleSubmit = (values: LoginFormValues) => {
    console.log(values);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("This field is required")
      .email("Invalid email address"),
    password: Yup.string().required(),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched }) => (
        <Form className="flex flex-col gap-6">
          <InputGroup
            name="email"
            value={values.email}
            touched={touched.email}
            label="Email"
            error={errors.email}
          />
          <InputGroup
            name="password"
            value={values.password}
            touched={touched.password}
            label="Password"
            error={errors.password}
          />
          <div className="mt-16">
            <Button>Login</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
