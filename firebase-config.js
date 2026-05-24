import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const firebaseConfig = {

apiKey: "AIzaSyAoYu9k8QKVhTalNJgYgFwztmtKPN1mMio",

authDomain: "kida-835b0.firebaseapp.com",

projectId: "kida-835b0",

storageBucket: "kida-835b0.firebasestorage.app",

messagingSenderId: "886653080955",

appId: "1:886653080955:web:2de5128e099e4afd6f99de",

measurementId: "G-J020RVE5EK"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };