//  import { collection,addDoc,db,auth} from "./firebase.mjs";

//  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
//  import { getAuth, createUserWithEmailAndPassword } from 
//  "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
 
//  import { getFirestore ,collection, addDoc,auth} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
//  const firebaseConfig = {
//    apiKey: "AIzaSyB--fWdbdGsFghz6qpfQfSWxbij_o9uaRo",
//    authDomain: "mobi-50cf3.firebaseapp.com",
//    projectId: "mobi-50cf3",
//    storageBucket: "mobi-50cf3.appspot.com",
//    messagingSenderId: "517558841907",
//    appId: "1:517558841907:web:a7457a74ab57397acee946",
//    measurementId: "G-6JV4X0NDH0"
//  };

//  const app = initializeApp(firebaseConfig);
//  const auth = getAuth(app);
//  const db = getFirestore(app);

// export {
//    auth,
//    createUserWithEmailAndPassword,
//    collection, addDoc ,db,auth
// }
// const authe = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
// ;

// const std_add =document.getElementById('std_add');

// std_add.addEventListener('click', async()=>{
//   const course =document.getElementById('course');
//   const marks =document.getElementById('marks');
//   const grade =document.getElementById('grade');
//   const student =document.getElementById('student');
//   const cnic =document.getElementById('cnic');
  
//   const docRef = await addDoc(collection(db, "studentdata"), {
//     course: course.value ,
//     marks: marks.value,
//     grade: grade.value,
//     student: student.value,
//     cnic: cnic.value

//   });
//   console.log("Document written with ID: ", docRef.id);
// });



import { addDoc,collection,db } from './firebase.js';
console.log(db);
let formValues = document.querySelectorAll('form input');
console.log(formValues)
const [course,marks,grade,studentID,cnic] = formValues;

let std_add = document.getElementById('std_add')

const addDaata =async()=>{
  event.preventDefault();
  try {
    const docRef = await addDoc(collection(db, "users"), {
      course: course.value,
      marks: marks.value,
      grade: grade.value,
      studentID:studentID.value,
      cnic:cnic.value
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


std_add.addEventListener('click',addDaata);





















