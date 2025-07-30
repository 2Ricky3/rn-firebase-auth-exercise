import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebase";
// TODO: Create Firebase Auth Functions
export const loginUser = async (email: string,  password:  string) => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User logged in:", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error logging in:", errorCode, errorMessage);
  });
}

//registration screen
export const logoutUser = () => {
  signOut(auth)
  .then(() => {
    console.log("User signed out successfully");
  })
}

export const getUserInfo = () => {
  const user = auth.currentUser;
  if (user) {
    return user
  } else {
    console.log("No user is currently signed in");
    return null;
  }
}

export const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered:", userCredential.user);
    return userCredential.user;
  } catch (error: any) {
    console.error("Error registering:", error.code, error.message);
    throw error;
  }
}