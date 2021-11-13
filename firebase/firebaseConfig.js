import { initializeApp } from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBCigLLiohmJ5L2MMjUS_eWlY40BNzVgWk",
    authDomain: "bboyapp-374a4.firebaseapp.com",
    projectId: "bboyapp-374a4",
    storageBucket: "bboyapp-374a4.appspot.com",
    messagingSenderId: "831284721075",
    appId: "1:831284721075:web:40e6debf1d3643769ec7c6",
    measurementId: "G-JDRGZ0XMNM"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
const db = firebase.firestore();

export const addEvent = (name,description,lat,lng,date,currentDate)=>{
    console.log(name,description,lat,lng,date)
    db.collection("Events").add({
        name: name,
        description:description,
        lat:lat,
        lng:lng,
        date:date,
        timestamp:currentDate
    })
    .then((docRef) => {
        alert('git');
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

export const getEvents =(setEventToState)=>{
    db.collection("Events").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            setEventToState(doc.data())
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}