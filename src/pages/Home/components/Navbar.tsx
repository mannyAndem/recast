import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";

const Navbar = () => {
  return (
    <nav className="px-16 py-5 flex justify-between items-center text-gray-800">
      <Link to="/" className="text-4xl font-grotesk font-semibold">
        RECAST
      </Link>
      <ul className="flex items-center gap-8 text-2xl font-medium font-inter">
        <Link to="/">Home</Link>
        <Link to="/library">Library</Link>
        <Link to="/">About</Link>
      </ul>
      <div className="flex items-center gap-8">
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
