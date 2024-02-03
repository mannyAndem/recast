import Header from "./components/Header";
import Videos from "./components/Videos";

const Library = () => {
  return (
    <div className="bg-smoke min-h-screen px-16 font-inter">
      <Header />
      <div className="py-16">
        <Videos />
      </div>
    </div>
  );
};

export default Library;