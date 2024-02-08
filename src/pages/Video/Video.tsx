import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFirestore from "../../hooks/useFirestore";
import { Status } from "../../shared.types";

const Video = () => {
  const { id } = useParams();
  const { fetchDoc } = useFirestore("videos");
  const [status, setStatus] = useState<Status>("idle");
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const getVideo = async () => {
      setStatus("pending");
      try {
        const doc = await fetchDoc(id!);
        // setVideo(doc.data());
        setStatus("success");
      } catch (err) {
        console.error(err);
      }
    };
  }, []);

  return <div></div>;
};

export default Video;
