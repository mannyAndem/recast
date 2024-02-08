import {
  DocumentData,
  QuerySnapshot,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

const useFirestore = (col: string) => {
  const createDocWithId = async (id: string, data: any) => {
    await setDoc(doc(db, col, id), data);
  };

  const createDoc = async (data: unknown) => {
    await addDoc(collection(db, col), data);
  };

  const fetchDoc = async (id: string) => {
    return getDoc(doc(db, col, id));
  };

  const queryCollection = async () => {};

  const getCollection = async () => {
    let data: DocumentData[] = [];
    const snapshot = await getDocs(collection(db, col));
    console.log(snapshot.docs);
    snapshot.forEach((doc) => data.push(doc.data()));
    return data;
  };

  const addSnapshotListener = (
    callback: (snapshot: QuerySnapshot<DocumentData, DocumentData>) => void
  ) => {
    return onSnapshot(collection(db, col), callback);
  };

  return {
    createDocWithId,
    createDoc,
    getCollection,
    addSnapshotListener,
    fetchDoc,
  };
};

export default useFirestore;
