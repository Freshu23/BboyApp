import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { parseError } from '../errorPasrer';

export const registerUser = (email, password, onError) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch(error => {
      onError(parseError(error.code));
      setTimeout(() => {
        onError(null);
      }, 3000);
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
