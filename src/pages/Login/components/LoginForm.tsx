import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputGroup from "../../../components/ui/InputGroup";
import Button from "../../../components/ui/Button";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import { Status } from "../../../shared.types";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [status, setStatus] = useState<Status>("idle");
  const navigate = useNavigate();

  const { login } = useAuthContext();

  const handleSubmit = async ({ email, password }: LoginFormValues) => {
    setStatus("pending");
    try {
      await login(email, password);
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status === "success") {
      navigate("/library");
    }
    if (status === "error") {
      toast.error("An error occurred during login.");
    }
  }, [status]);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("This field is required")
      .email("Invalid email address"),
    password: Yup.string().required("This field is required"),
  });

  return (
    <>
      <Toaster />
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
              type="password"
            />
            <div className="mt-16">
              <Button pending={status === "pending"}>Login</Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
