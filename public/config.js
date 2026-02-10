// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAcL-bSoDVHmnCibjqmINDlN-mT_IcvQCQ",
    authDomain: "souleasy-7c.firebaseapp.com",
    projectId: "souleasy-7c",
    storageBucket: "souleasy-7c.firebasestorage.app",
    messagingSenderId: "568859268806",
    appId: "1:568859268806:web:1503728a097e23465369c7"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);