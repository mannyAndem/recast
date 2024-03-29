import Header from "./components/Header";
import Videos from "./components/Videos";

const Library = () => {
  return (
    <div className="bg-slate-100 min-h-screen px-5 font-inter lg:px-16">
      <Header />
      <div className="py-16">
        <Videos />
      </div>
    </div>
  );
};

export default Library;
