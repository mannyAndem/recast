import { Field, Formik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";

const SignupForm = () => {
  const handleSubmit = (values: object) => {
    console.log(values);
  };

  const signupSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("This field is required"),
    password: Yup.string()
      .required("This field is required")
      .min(6, "Password must be atleast 6 characters long"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("This field is required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={signupSchema}
    >
      {({ errors, touched, values, isValid, dirty, handleSubmit }) => (
        <form
          className="w-full grid grid-cols-2 gap-6 font-inter"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="name">Full name</label>
            <Input
              name="name"
              value={values.name}
              error={errors.name}
              touched={touched.name}
            />
            {errors.name && touched.name && (
              <span className="text-sm text-red-400">{errors.name}</span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <Input
              name="email"
              value={values.email}
              error={errors.email}
              touched={touched.email}
            />
            {errors.email && touched.email && (
              <span className="text-sm text-red-400">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="password">Password</label>
            <Input
              name="password"
              value={values.password}
              error={errors.password}
              touched={touched.password}
              type="password"
            />
            {errors.password && touched.password && (
              <span className="text-sm text-red-400">{errors.password}</span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Input
              name="confirmPassword"
              value={values.confirmPassword}
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
              type="password"
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <span className="text-sm text-red-400">
                {errors.confirmPassword}
              </span>
            )}
          </div>
          <div className="mt-16 col-span-2">
            <Button disabled={!isValid || !dirty}>Create Account</Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default SignupForm;
