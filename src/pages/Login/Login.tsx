import { Link } from "react-router-dom";
import loginImg from "../../assets/images/signup-img.jpg";
import LoginForm from "./components/LoginForm";
// import SignupForm from "./components/SignupForm";

const Login = () => {
  return (
    <div className="min-h-screen bg-smoke flex">
      <div className="h-full w-1/2">
        <img
          src={loginImg}
          alt="Image of film"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 h-full p-16">
        <div className="flex justify-end font-grotesk">
          <Link to="/" className="text-2xl font-semibold">
            RECAST
          </Link>
        </div>
        <div className="mt-16">
          <h1 className="text-4xl font-medium font-grotesk mb-8">Login</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
