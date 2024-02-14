import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFirestore from "../../hooks/useFirestore";
import { Status, Video } from "../../shared.types";
import VideoDisplay from "./components/VideoDisplay";
import VideoActions from "./components/VideoActions";
import Loader from "../../components/ui/Loader";
import BackButton from "../../components/feature/BackButton";

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
        setVideo({ ...doc.data(), id: doc.id } as Video);
        setStatus("success");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    };

    getVideo();
  }, []);

  return (
    <div className="flex justify-center items-center relative min-h-screen py-24 px-5 bg-slate-100 lg:px-16 lg:block">
      <div className="absolute top-4 left-4">
        <BackButton />
      </div>
      {status === "success" ? (
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-6">
          <div className="col-span-5">
            <VideoDisplay video={video!} />
          </div>
          <div className="col-span-1 w-full">
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
