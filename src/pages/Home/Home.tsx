import Navbar from "./components/Navbar";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />
      <section className="py-32 px-16 gap-16 ">
        <div className="mx-auto text-center w-1/2 flex flex-col gap-16 text-4xl justify-center">
          <div className="flex flex-col gap-4">
            <h1>
              <span className="text-blue-400 font-medium ">RECAST</span> is a
              free web based screen recording tool.
            </h1>
            <p>
              Record videos without any time limits or ugly watermarks all for
              free.
            </p>
          </div>
          <Link to="/signup">
            <Button>Get Started</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
