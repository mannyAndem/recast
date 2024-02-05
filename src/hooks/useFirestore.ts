import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const useFirestore = (col: string) => {
  const createDocWithId = async (id: string, data: any) => {
    await setDoc(doc(db, col, id), data);
  };

  return { createDocWithId };
};

export default useFirestore;
