// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Твій конфіг з Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAgpvvSKGUQNLvXZbFIheLEWJAIasp_eRM",
  authDomain: "northbound-lab4.firebaseapp.com",
  projectId: "northbound-lab4",
  storageBucket: "northbound-lab4.firebasestorage.app",
  messagingSenderId: "268964008154",
  appId: "1:268964008154:web:3f42ba0ae68cb7661655e3"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);

// Експортуємо auth та db, щоб використовувати їх в інших файлах (для логіну та збереження статей)
export const auth = getAuth(app);
export const db = getFirestore(app);