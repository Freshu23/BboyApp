import { collection, addDoc, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { app } from "../firebaseConfig";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const db = getFirestore(app);
const storage = getStorage(app);

export const addEvent = (event) => {
  addDoc(collection(db, "cities"), {
    event,
  });
};
export const getEvents = async (setEventToState) => {
  const querySnapshot = await getDocs(collection(db, "Events"));
  querySnapshot.forEach((doc) => {
    fetchImagesForOffer(doc.data(), setEventToState);
  });
};
const fetchImagesForOffer = async (doc, setEventToState) => {
  getDownloadURL(ref(storage, `${doc.logo}`)).then((url) => {
    setEventToState({ ...doc, logoURL: url });
  });
};

// export const addEvent = (
//   name,
//   description,
//   lat,
//   lng,
//   date,
//   currentDate,
//   logo,
//   place,
//   categories
// ) => {
//   db.collection('Events')
//     .add({
//       id: Math.random(),
//       name: name,
//       description: description,
//       lat: lat,
//       lng: lng,
//       date: date,
//       timestamp: currentDate,
//       logo: logo,
//       place: place,
//       categories: categories,
//     })
//     .then(docRef => {
//       alert('git');
//     })
//     .catch(error => {
//       console.error('Error adding document: ', error);
//     });
// };

// export const getEvents = setEventToState => {
//   db.collection('Events')
//     .get()
//     .then(querySnapshot => {
//       querySnapshot.forEach(doc => {
//         console.log(doc.data());
//         fetchImagesForOffer(doc.data(), setEventToState);
//       });
//     })
//     .catch(error => {
//       console.log('Error getting documents: ', error);
//     });
// };
// const fetchImagesForOffer = async (doc, setEventToState) => {
//   storageRef
//     .child(`${doc.logo}`)
//     .getDownloadURL()
//     .then(url => {
//       setEventToState({ ...doc, logoURL: url });
//     })
//     .catch(error => {
//       // Handle any errors
//     });
// };
