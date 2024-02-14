import { useEffect, useState } from "react";
import useFirestore from "../../../hooks/useFirestore";
import NewVideoButton from "./NewVideoButton";
import VideosList from "./VideosList";
import { Status, Video } from "../../../shared.types";
import Loader from "../../../components/ui/Loader";
import { where } from "firebase/firestore";
import { useAuthContext } from "../../../contexts/AuthContext";

const Videos = () => {
  const { addSnapshotListener } = useFirestore("videos");
  const [videos, setVideos] = useState<Video[] | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const { user } = useAuthContext();

  useEffect(() => {
    setStatus("pending");
    const unsubscribe = addSnapshotListener((snapshot) => {
      let videos: Video[] = [];
      snapshot.forEach((doc) =>
        videos.push({ id: doc.id, ...doc.data() } as Video)
      );
      console.log(snapshot.docs);
      setVideos(videos);
      setStatus("success");
    }, where("ownedBy", "==", user?.uid));

    return unsubscribe;
  }, []);

  console.log(status);
  return (
    <div>
      <div className="text-blue-400 py-4 border-b-2 border-blue-400 flex items-center justify-between font-inter">
        <h2 className="text-3xl font-medium font-grotesk">Library</h2>
        <div className="hidden lg:block">
          <NewVideoButton />
        </div>
      </div>
      <div className="py-8">
        {status === "success" ? (
          <VideosList videos={videos!} />
        ) : status === "pending" ? (
          <Loader variant="dark" size="lg" />
        ) : status === "error" ? (
          <span className="block text-center text-red-400 text-3xl">
            Something went wrong.
          </span>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Videos;
