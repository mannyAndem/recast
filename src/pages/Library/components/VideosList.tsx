import useRecord from "../../../hooks/useRecord";
import Video from "./Video";

const VideosList = () => {
  const { videoSrc } = useRecord();

  return (
    <div className="grid grid-cols-3 gap-8">
      {/* <div className="mt-24 col-span-3">
        <span className="block font-semibold text-center text-4xl text-purple">
          You haven't recorded any videos yet.
        </span>
      </div> */}
      <Video src={videoSrc!} />
    </div>
  );
};

export default VideosList;
