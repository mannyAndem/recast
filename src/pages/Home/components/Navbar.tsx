import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { BiMenu } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <nav className="px-5 py-5 flex justify-between items-center text-gray-800 lg:px-16">
      <Link to="/" className="text-xl font-grotesk font-semibold lg:text-4xl">
        RECAST
      </Link>

      {/* Mobile Nav */}
      <button onClick={toggleMenu} className="z-50 lg:hidden">
        {!isExpanded && <BiMenu size={28} className="text-blue-400" />}
        {isExpanded && <CgClose size={28} className="text-blue-400" />}
      </button>
      <div
        className={`${
          isExpanded ? "scale-x-100" : "scale-x-0"
        } origin-right transition-all duration-300 ease-out py-24 px-5 fixed top-0 bottom-0 right-0 w-[60vw] bg-blue-200 bg-opacity-60 backdrop-blur-sm lg:hidden flex flex-col gap-6 z-40`}
      >
        <ul className="flex flex-col items-center gap-8 text-xl font-medium font-inter">
          <Link to="/">Home</Link>
          <Link to="/library">Library</Link>
          <Link to="/">About</Link>
        </ul>
        <div className="mt-16 flex flex-col gap-8">
          <Link to="/signup">
            <Button>Signup</Button>
          </Link>
          <Link to="/login">
            <Button variant="secondary">Login</Button>
          </Link>
        </div>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden items-center gap-8 text-2xl font-medium font-inter lg:flex">
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>
        <Link to="/">About</Link>
      </ul>
      <div className="hidden items-center gap-8 lg:flex">
        <Link to="/signup">
          <Button>Signup</Button>
        </Link>
        <Link to="/login">
          <Button variant="secondary">Login</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
