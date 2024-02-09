import {
  DocumentData,
  QueryFieldFilterConstraint,
  QuerySnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

const useFirestore = (col: string) => {
  const createDocWithId = async (id: string, data: any) => {
    await setDoc(doc(db, col, id), data);
  };

  const createDoc = async (data: unknown) => {
    const docRef = await addDoc(collection(db, col), data);
    return docRef.id;
  };

  const fetchDoc = async (id: string) => {
    return getDoc(doc(db, col, id));
  };

  const getCollection = async () => {
    let data: DocumentData[] = [];
    const snapshot = await getDocs(collection(db, col));
    console.log(snapshot.docs);
    snapshot.forEach((doc) => data.push(doc.data()));
    return data;
  };

  const addSnapshotListener = (
    callback: (snapshot: QuerySnapshot<DocumentData, DocumentData>) => void,
    queryExpression?: QueryFieldFilterConstraint
  ) => {
    if (queryExpression) {
      const q = query(collection(db, col), queryExpression);
      return onSnapshot(q, callback);
    }

    return onSnapshot(collection(db, col), callback);
  };

  const deleteDocument = async (id: string) => {
    const docRef = doc(db, col, id);
    await deleteDoc(docRef);
  };

  return {
    createDocWithId,
    createDoc,
    getCollection,
    addSnapshotListener,
    fetchDoc,
    deleteDocument,
  };
};

export default useFirestore;
