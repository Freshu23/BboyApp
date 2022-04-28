import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBCigLLiohmJ5L2MMjUS_eWlY40BNzVgWk',
  authDomain: 'bboyapp-374a4.firebaseapp.com',
  projectId: 'bboyapp-374a4',
  storageBucket: 'bboyapp-374a4.appspot.com',
  messagingSenderId: '831284721075',
  appId: '1:831284721075:web:40e6debf1d3643769ec7c6',
  measurementId: 'G-JDRGZ0XMNM',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const storageRef = ref(storage);
