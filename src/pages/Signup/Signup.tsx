import { Link } from "react-router-dom";
import signupImg from "../../assets/images/signup-img.jpg";
import SignupForm from "./components/SignupForm";

const Signup = () => {
  return (
    <div className="min-h-screen bg-smoke flex text-purple">
      <div className="h-full w-1/2">
        <img
          src={signupImg}
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
          <h1 className="text-4xl font-medium font-grotesk mb-8">
            Create Account
          </h1>
          <SignupForm />
          <p className="mt-4 text-xl text-center">
            Already have an account?{" "}
            <Link to="/login" className="underline font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
