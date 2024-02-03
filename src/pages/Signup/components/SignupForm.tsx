import { Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../../../components/ui/Button";
import { useAuthContext } from "../../../contexts/AuthContext";
import InputGroup from "../../../components/ui/InputGroup";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Status } from "../../../shared.types";

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm = () => {
  const { signup } = useAuthContext();
  const navigate = useNavigate();

  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (values: SignupFormValues) => {
    setStatus("pending");
    try {
      await signup(values.email, values.password);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      console.error(err);
    }
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

  useEffect(() => {
    if (status === "success") {
      navigate("/library");
    }

    if (status === "error") {
      // toast error
    }
  }, [status]);

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
      {({ errors, touched, values, isValid, dirty }) => (
        <Form className="w-full grid grid-cols-2 gap-6 font-inter">
          <InputGroup
            name="name"
            value={values.name}
            error={errors.name}
            touched={touched.name}
            label="Full Name"
          />
          <InputGroup
            name="email"
            value={values.email}
            error={errors.email}
            touched={touched.email}
            label="Email"
          />
          <InputGroup
            name="password"
            value={values.password}
            error={errors.password}
            touched={touched.password}
            label="Password"
            type="password"
          />
          <InputGroup
            name="confirmPassword"
            value={values.confirmPassword}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
            label="Confirm Password"
            type="password"
          />
          <div className="mt-16 col-span-2">
            <Button
              disabled={!isValid || !dirty}
              pending={status === "pending"}
            >
              Create Account
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
