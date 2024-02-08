import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/firebase";

const useStorage = () => {
  const uploadFile = async (file: Blob | File, name: string) => {
    const fileRef = ref(storage, name);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);
    return url;
  };

  return { uploadFile };
};

export default useStorage;
