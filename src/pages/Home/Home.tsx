import Navbar from "./components/Navbar";
import screenshot from "../../assets/images/2024-02-11 22_53_07-.png";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />
      <section className="py-24 px-16 flex items-center gap-16">
        <div className="flex flex-col gap-16">
          <h1 className="text-4xl">
            <span className="text-blue-400 font-medium ">RECAST</span> is a free
            web based screen recording tool.
          </h1>
          <Link to="/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
        <div className="mt-16 shadow-md rounded-md overflow-hidden border-blue-400 border-2">
          <img
            src={screenshot}
            alt="screenshot of recast libray"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
