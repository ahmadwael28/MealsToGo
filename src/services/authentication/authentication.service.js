import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(getAuth(), email, password);
};

export const registerRequest = (email, password) => {
  return createUserWithEmailAndPassword(getAuth(), email, password);
};

export const signoutRequest = () => {
  return signOut(getAuth());
};
