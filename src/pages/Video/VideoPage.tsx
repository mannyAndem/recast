import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFirestore from "../../hooks/useFirestore";
import { Status, Video } from "../../shared.types";
import VideoDisplay from "./components/VideoDisplay";
import VideoActions from "./components/VideoActions";
import Loader from "../../components/ui/Loader";

const VideoPage = () => {
  const { id } = useParams();
  const { fetchDoc } = useFirestore("videos");
  const [status, setStatus] = useState<Status>("idle");
  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    const getVideo = async () => {
      setStatus("pending");
      try {
        const doc = await fetchDoc(id!);
        setVideo(doc.data() as Video);
        setStatus("success");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    };

    getVideo();
  }, []);

  return (
    <div className="min-h-screen py-24 px-16 bg-smoke">
      {status === "success" ? (
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-5">
            <VideoDisplay video={video!} />
          </div>
          <div className="col-span-1">
            <VideoActions video={video!} />
          </div>
        </div>
      ) : status === "pending" ? (
        <Loader size="lg" variant="dark" />
      ) : status === "error" ? (
        <div className="h-full flex justify-center items-center">
          <span className="text-red-400 text-4xl font-medium font-jakarta">
            Couldn't load video
          </span>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default VideoPage;