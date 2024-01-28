import { Field, Formik, useFormik } from "formik";
import * as Yup from "yup";

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
      .oneOf([Yup.ref("password")])
      .required(),
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
      {({ errors, touched, values }) => (
        <form className="w-full grid grid-cols-2 gap-6 font-inter"></form>
      )}
    </Formik>
  );
};

export default SignupForm;
