// firebaseUtils.ts
import {
  collection,
  getDocs,
  addDoc,
  DocumentData,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "../constants/firebaseConfig";

export const getFromFirebase = async (
  collectionName: string,
): Promise<DocumentData[]> => {
  const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(
    collection(db, collectionName),
  );
  return querySnapshot.docs.map((doc) => doc.data());
};

export const addToFirebase = async (
  collectionName: string,
  data: DocumentData,
) => {
  const docRef = await addDoc(collection(db, collectionName), data);
  return docRef;
};
