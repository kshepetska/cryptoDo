import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCYm7AAiY_SBS1pGadGseSuN37FzM-eywA',
  authDomain: 'cryptododo-6df0b.firebaseapp.com',
  projectId: 'cryptododo-6df0b',
  storageBucket: 'cryptododo-6df0b.appspot.com',
  messagingSenderId: '492472775429',
  appId: '1:492472775429:web:bd17b783cb75ab052afd6c',
  measurementId: 'G-0X1SR6F81H',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {app, auth, firestore};
