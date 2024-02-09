import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../firebase/firebase";

const useStorage = () => {
  const uploadFile = async (file: Blob | File, name: string) => {
    const fileRef = ref(storage, name);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);
    return url;
  };

  const deleteFile = async (name: string) => {
    const fileRef = ref(storage, name);
    await deleteObject(fileRef);
  };

  return { uploadFile, deleteFile };
};

export default useStorage;
