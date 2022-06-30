// import React, { useState, useEffect } from "react";
// import styles from "./AddEventForm.module.css";
// import GoogleSearch from "./GoogleSearch/GoogleSearch";
// import GooglePlacesAutocomplete from "react-google-places-autocomplete";
// import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";

// import TextField from "@mui/material/TextField";
// import { MultiSelect } from "@mantine/core";
// import { categories } from "../../utils/categories";
// import { DatePicker } from "@mantine/dates";

// export const AddEventForm = () => {
//   const [place, setPlace] = useState(false);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [date, setDate] = useState("");
//   const [coordinates, setCoordinates] = useState({ lat: "", lng: "" });
//   const [currentDate, setCurrentDate] = useState("");
//   const [logo, setLogo] = useState("red-bull.png");
//   const [fileURL, setFileURL] = useState(false);

//   const onFileChange = (e) => {
//     const file = e.target.files[0];
//     const storageRef = storage.ref();
//     const fileRef = storageRef.child(`${file.name}`);
//     const reader = new FileReader();
//     const url = reader.readAsDataURL(file);
//     reader.onloadend = function () {
//       setFileURL(reader.result);
//     };
//     fileRef.put(file).then(() => console.log("uploaded succsessfully"));
//     setLogo(`${file.name}`);
//   };
//   useEffect(() => {
//     if (place) {
//       geocodeByAddress(place.label)
//         .then((results) => getLatLng(results[0]))
//         .then(({ lat, lng }) => setCoordinates({ lat: lat, lng: lng }));
//     }
//   }, [place]);

//   useEffect(() => {
//     const today = new Date();
//     const currentDate =
//       today.getFullYear() +
//       "-" +
//       (today.getMonth() + 1) +
//       "-" +
//       today.getDate();
//     setCurrentDate(currentDate);
//   }, []);

//   const addNewEvent = () => {
//     const eventDate = new Date(date).toLocaleDateString("en-US");
//     console.log(eventDate);
//     addEvent(
//       name,
//       description,
//       `${coordinates.lat}`,
//       `${coordinates.lng}`,
//       eventDate,
//       currentDate,
//       logo,
//       place.label,
//       selectedCategories
//     );
//   };
//   const inputStyles = {
//     fontFamily: "Space Grotesk",
//   };
//   useEffect(() => {
//     const today = new Date();
//     const currentDate =
//       today.getFullYear() +
//       "-" +
//       (today.getMonth() + 1) +
//       "-" +
//       today.getDate();
//     setCurrentDate(currentDate);
//   }, []);

//   return (
//     <div className={styles.formWrapper}>
//       <div className={styles.inputRow}>
//         <TextField
//           id="standard-basic"
//           label="Event name"
//           variant="standard"
//           onChange={(e) => setName(e.target.value)}
//           inputProps={{ style: inputStyles }}
//           InputLabelProps={{ style: inputStyles }}
//         />
//       </div>
//       <div className={styles.inputRow}>
//         <TextField
//           id="standard-multiline-static"
//           label="Event description"
//           multiline
//           variant="standard"
//           onChange={(e) => setDescription(e.target.value)}
//           inputProps={{ style: inputStyles }}
//           InputLabelProps={{ style: inputStyles }}
//         />
//       </div>
//       <div className={styles.inputRow}>
//         <label>Categories</label>
//         <MultiSelect
//           transitionDuration={150}
//           transition="pop-top-left"
//           transitionTimingFunction="ease"
//           data={categories}
//           placeholder="Select categories..."
//           className={styles.categories}
//           onChange={setSelectedCategories}
//         />
//       </div>

//       <div className={styles.inputRow}>
//         <label>Place</label>
//         <GooglePlacesAutocomplete
//           apiKey="AIzaSyAgDpMx1R4rp7PcerWXYXpODWKqALHZVvk"
//           selectProps={{
//             place,
//             onChange: setPlace,
//           }}
//         />
//       </div>
//       <div className={styles.inputRow}>
//         <p className={styles.fileLabel}>Event image</p>
//         <div className={styles.rowContainer}>
//           <label className={styles.fileInputLabel} htmlFor="file-upload">
//             Click to choose image
//           </label>
//           <input
//             onChange={onFileChange}
//             id="file-upload"
//             className={styles.fileInput}
//             type="file"
//           />
//           {/* {fileURL && <img className={styles.previewImg} src={fileURL} />} */}
//         </div>
//       </div>
//       <div className={styles.inputRow}>
//         <DatePicker
//           placeholder="Pick event date"
//           label="Event date"
//           onChange={setDate}
//           styles={{ label: { fontFamily: "Space Grotesk", fontSize: 16 } }}
//         />
//       </div>
//       <div className={styles.buttonWrapper}>
//         <button onClick={addNewEvent} className={styles.submitBtn}>
//           Add Event
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddEventForm;
