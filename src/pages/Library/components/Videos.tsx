import { useEffect, useState } from "react";
import useFirestore from "../../../hooks/useFirestore";
import NewVideoButton from "./NewVideoButton";
import VideosList from "./VideosList";
import { DocumentData } from "firebase/firestore";

const Videos = () => {
  const { getCollection, addSnapshotListener } = useFirestore("videos");
  const [videos, setVideos] = useState<DocumentData[] | null>(null);

  useEffect(() => {
    const unsubscribe = addSnapshotListener((snapshot) => {
      let videos: DocumentData[] = [];
      snapshot.forEach((doc) => videos.push(doc.data()));
      console.log(snapshot.docs);
      setVideos(videos);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <div className="text-purple py-4 border-b-2 border-purple flex items-center justify-between font-inter">
        <h2 className="text-3xl font-medium font-grotesk">Library</h2>
        <div>
          <NewVideoButton />
        </div>
      </div>
      <div className="py-8">{videos && <VideosList videos={videos} />}</div>
    </div>
  );
};

export default Videos;
