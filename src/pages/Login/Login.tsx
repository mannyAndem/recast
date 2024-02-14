import { Link } from "react-router-dom";
import loginImg from "../../assets/images/signup-img.jpg";
import LoginForm from "./components/LoginForm";
// import SignupForm from "./components/SignupForm";

const Login = () => {
  return (
    <div
      style={{ "--image-url": `url(${loginImg})` } as any}
      className="bg-[image:var(--image-url)] h-screen"
    >
      <div className="p-5 w-full h-full bg-gray-700 bg-opacity-70 flex justify-center items-center">
        <div className="p-5 w-full max-w-[800px] shadow-md rounded-md lg:p-8 bg-slate-100">
          <div className="flex justify-end font-grotesk">
            <Link to="/" className="font-semibold lg:text-2xl">
              RECAST
            </Link>
          </div>
          <div className="mt-8 lg:mt-16">
            <h1 className="text-2xl font-medium font-grotesk mb-8 lg:text-4xl">
              Login
            </h1>
            <LoginForm />
            <p className="mt-4 text-sm text-center lg:text-xl">
              Don't have an account?{" "}
              <Link to="/signup" className="underline font-medium">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
