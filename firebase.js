import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWe1Ng_5dKNxDQL11JB4Xu3dmqzUs8D9s",
  authDomain: "hostelallotmentapp-4e4f0.firebaseapp.com",
  projectId: "hostelallotmentapp-4e4f0",
  storageBucket: "hostelallotmentapp-4e4f0.appspot.com",
  messagingSenderId: "914708249803",
  appId: "1:914708249803:web:60dcd90679f5e405fa2f4e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
