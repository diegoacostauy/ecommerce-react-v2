import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyA7jU4fHkvmLoN1fMp8Db7xafQPKY_Pzus",
  authDomain: "ecommerce-react-v2.firebaseapp.com",
  databaseURL: "https://ecommerce-react-v2.firebaseio.com",
  projectId: "ecommerce-react-v2",
  storageBucket: "ecommerce-react-v2.appspot.com",
  messagingSenderId: "1045851205674",
  appId: "1:1045851205674:web:8fcea5a52fcd996fd21353"
};

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const userSnap = await userRef.get();

  if (!userSnap.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;