
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from 
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
  
  import { getFirestore ,collection, addDoc} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCessA2t4yJ5DUh8yFE1fMWWozJ5nWqv8s",
    authDomain: "hackathon-b668f.firebaseapp.com",
    projectId: "hackathon-b668f",
    storageBucket: "hackathon-b668f.appspot.com",
    messagingSenderId: "652726997672",
    appId: "1:652726997672:web:80c034294870a91153689d",
    measurementId: "G-DV0D07EC6P"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

export {
    auth,
    createUserWithEmailAndPassword,
    collection, addDoc ,db
}