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
      <div className="w-full h-full bg-gray-700 bg-opacity-70 flex justify-center items-center">
        <div className="w-full max-w-[600px] shadow-md rounded-md p-8 bg-slate-100">
          <div className="flex justify-end font-grotesk">
            <Link to="/" className="text-2xl font-semibold">
              RECAST
            </Link>
          </div>
          <div className="mt-16">
            <h1 className="text-4xl font-medium font-grotesk mb-8">Login</h1>
            <LoginForm />
            <p className="mt-4 text-xl text-center">
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
