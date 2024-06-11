import { auth, firestoreDB } from "@/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";

export const signInEmail = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user.user);
    return user.user;
  } catch (error) {
    console.log("error", error);
  }
};

export const signUp = async (email: string, password: string) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user.user);
    const docRef = doc(firestoreDB, "users", user.user.uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(docRef, { email: user.user.email, id: user.user.uid });
    }
    return user.user;
  } catch (error) {
    console.log("error", error);
  }
};
