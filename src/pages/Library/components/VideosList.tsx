import useRecord from "../../../hooks/useRecord";
import Video from "./Video";

const VideosList = () => {
  const { video } = useRecord();
  console.log(video);

  return (
    <div className="grid grid-cols-3 gap-8">
      {/* <div className="mt-24 col-span-3">
        <span className="block font-semibold text-center text-4xl text-purple">
          You haven't recorded any videos yet.
        </span>
      </div> */}
      <div className="h-40">{video && <Video src={video} />}</div>
    </div>
  );
};

export default VideosList;
