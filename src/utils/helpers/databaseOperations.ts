import { DocumentData } from "firebase/firestore";
import { addToFirebase, getFromFirebase } from "./firebaseOperations";

export const getFromDatabase = async (
  collectionName: string,
): Promise<DocumentData[]> => {
  return getFromFirebase(collectionName);
};

export const addToDatabase = async (
  collectionName: string,
  data: DocumentData,
) => {
  return addToFirebase(collectionName, data);
};
