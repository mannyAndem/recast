import Button from "../../../components/ui/Button";
import VideosList from "./VideosList";

const Videos = () => {
  return (
    <div>
      <div className="text-purple py-4 border-b-2 border-purple flex items-center justify-between font-inter">
        <h2 className="text-3xl font-medium font-grotesk">Library</h2>
        <div>
          <Button>New video</Button>
        </div>
      </div>
      <div className="py-8">
        <VideosList />
      </div>
    </div>
  );
};

export default Videos;
