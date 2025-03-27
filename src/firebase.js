import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDWLaT3r9v8hk_OjbxTGazNEAMTHCLONAg",
    authDomain: "your-platform-27e6c.firebaseapp.com",
    projectId: "your-platform-27e6c",
    storageBucket: "your-platform-27e6c.firebasestorage.app",
    messagingSenderId: "124726450629",
    appId: "1:124726450629:web:9d1958fe40b1ca753113ac"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async(name,email,password)=>{
    try {
       const res = await createUserWithEmailAndPassword(auth,email,password)
       const user = res.user;
       await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvide:'local',
        email,
       })
    } catch (error) {
        console.log(error)
        alert(Error)
    }
}

const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console(error)
        alert(error)
    }
}


const logout = ()=>{
    signOut(auth)
}

export {auth,db,signup,login,logout};










