import React, { useState, useEffect } from "react";
import styles from "./AddEventForm.module.css";
import GoogleSearch from "./GoogleSearch/GoogleSearch";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import { addEvent } from "../../firebase/firebaseConfig";
import { storage } from "../../firebase/firebaseConfig";

export const AddEventForm = () => {
  const [place, setPlace] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: "", lng: "" });
  const [currentDate, setCurrentDate] = useState("");
  const [logo, setLogo] = useState("red-bull.png");
  const [fileURL, setFileURL] = useState(false);

  const onFileChange = e => {
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(`${file.name}`);
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);
    reader.onloadend = function () {
      setFileURL(reader.result);
    };
    fileRef.put(file).then(() => console.log("uploaded succsessfully"));
    setLogo(`${file.name}`);
  };
  useEffect(() => {
    if (place) {
      geocodeByAddress(place.label)
        .then(results => getLatLng(results[0]))
        .then(({ lat, lng }) => setCoordinates({ lat: lat, lng: lng }));
    }
  }, [place]);

  useEffect(() => {
    const today = new Date();
    const currentDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    setCurrentDate(currentDate);
  }, []);

  const addNewEvent = () => {
    addEvent(
      name,
      description,
      `${coordinates.lat}`,
      `${coordinates.lng}`,
      date,
      currentDate,
      logo,
      place.label
    );
  };

  useEffect(() => {
    const today = new Date();
    const currentDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    setCurrentDate(currentDate);
  }, []);

  return (
    <div className={styles.formWrapper}>
      <div className={styles.inputRow}>
        <label>Event Name</label>
        <input
          onChange={e => setName(e.target.value)}
          className={styles.formInput}></input>
      </div>
      <div className={styles.inputRow}>
        <label>Place</label>
        <GooglePlacesAutocomplete
          apiKey='AIzaSyAgDpMx1R4rp7PcerWXYXpODWKqALHZVvk'
          selectProps={{
            place,
            onChange: setPlace,
          }}
        />
      </div>
      <div className={styles.inputRow}>
        <p className={styles.fileLabel}>image</p>
        <label className={styles.fileInputLabel} htmlFor='file-upload'>
          click to choose image
        </label>
        <input
          onChange={onFileChange}
          id='file-upload'
          className={styles.fileInput}
          type='file'
        />
      </div>
      {fileURL && <img className={styles.previewImg} src={fileURL} />}
      <div className={styles.inputRow}>
        <label>description</label>
        <textarea
          onChange={e => setDescription(e.target.value)}
          className={styles.description}></textarea>
      </div>
      <div className={styles.inputRow}>
        <label>date</label>
        <input
          onChange={e => setDate(e.target.value)}
          className={styles.datePicker}
          type='date'></input>
      </div>
      <div className={styles.buttonWrapper}>
        <button onClick={addNewEvent} className={styles.submitBtn}>
          ADD EVENT
        </button>
      </div>
    </div>
  );
};

export default AddEventForm;
