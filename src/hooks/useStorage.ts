import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/firebase";

const useStorage = () => {
  const uploadFile = async (file: Blob | File, name: string) => {
    const fileRef = ref(storage, name);
    await uploadBytes(fileRef, file);
  };

  return { uploadFile };
};

export default useStorage;
