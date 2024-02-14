import { Link } from "react-router-dom";
import signupImg from "../../assets/images/signup-img.jpg";
import SignupForm from "./components/SignupForm";

const Signup = () => {
  return (
    // <div className="min-h-screen bg-smoke flex text-purple">
    //   <div className="h-full w-1/2 bg-veryLightPurple">
    //     <img
    //       src={signupImg}
    //       alt="Image of film"
    //       className="w-full h-full object-cover"
    //     />
    //   </div>
    //   <div className="w-1/2 h-full p-16">
    //     <div className="flex justify-end font-grotesk">
    //       <Link to="/" className="text-2xl font-semibold">
    //         RECAST
    //       </Link>
    //     </div>
    //     <div className="mt-16">
    //       <h1 className="text-4xl font-medium font-grotesk mb-8">
    //         Create Account
    //       </h1>
    //       <SignupForm />
    //       <p className="mt-4 text-xl text-center">
    //         Already have an account?{" "}
    //         <Link to="/login" className="underline font-medium">
    //           Login
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div
      style={{ "--image-url": `url(${signupImg})` } as any}
      className="bg-[image:var(--image-url)] h-screen"
    >
      <div className="p-5 w-full h-full bg-gray-700 bg-opacity-70 flex justify-center items-center">
        <div className="w-full max-w-[600px] shadow-md rounded-md p-5 bg-slate-100 text-gray-800 lg:p-8">
          <div className="flex justify-end font-grotesk">
            <Link to="/" className="font-semibold lg:text-2xl">
              RECAST
            </Link>
          </div>
          <div className="mt-8 lg:mt-16">
            <h1 className="text-2xl font-medium font-grotesk mb-8 lg:text-4xl">
              Signup
            </h1>
            <SignupForm />
            <p className="mt-4 text-center lg:text-xl">
              Already have an account?{" "}
              <Link to="/login" className="underline font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
