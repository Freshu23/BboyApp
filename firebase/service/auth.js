import { createUserWithEmailAndPassword } from "firebase/auth";
import { parseError } from "../errorPasrer";
import { app } from "../firebaseConfig";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

export const registerUser = (email, password, onError) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      onError(parseError(error.code));
      setTimeout(() => {
        onError(null);
      }, 3000);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
