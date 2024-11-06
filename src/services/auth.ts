import {auth} from '../firebase/firebase';
import {
  createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword,
  signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updatePassword,
  sendEmailVerification,
  User,
} from 'firebase/auth';

export const createUser = async (email: string, password: string) => {
  return await firebaseCreateUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = async (email: string, password: string) => {
  return await firebaseSignInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
};

export const signOut = async () => {
  return await auth.signOut();
};

export const passwordReset = async (email: string) => {
  return await sendPasswordResetEmail(auth, email);
};

export const changePassword = async (newPassword: string) => {
  const user = auth.currentUser;
  if (user) {
    return await updatePassword(user, newPassword);
  } else {
    throw new Error('No user is currently signed in.');
  }
};

export const sendEmailVerificationLink = async () => {
  const user = auth.currentUser;
  if (user) {
    return await sendEmailVerification(user, {
      url: '',
    });
  } else {
    throw new Error('No user is currently signed in.');
  }
};
