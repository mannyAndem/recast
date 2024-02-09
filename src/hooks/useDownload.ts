import { useState } from "react";
import { Status } from "../shared.types";

const useDownload = () => {
  const [status, setStatus] = useState<Status>("idle");

  const downloadBlob = async (url: string, fileName: string) => {
    setStatus("pending");

    try {
      const res = await fetch(url);
      const blob = await res.blob();

      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", blobUrl);
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return { downloadBlob, status };
};

export default useDownload;
