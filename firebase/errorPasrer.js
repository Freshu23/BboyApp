export const parseError = error_code => {
  switch (error_code) {
    case 'auth/email-already-in-use':
      return 'The email address is already in use by another account.';
    case 'auth/invalid-email':
      return 'The email address is invalid.';
    case 'auth/operation-not-allowed':
      return 'Password sign-in is disabled for this project.';
    case 'auth/weak-password':
      return 'The password is invalid or empty.';
  }
};
