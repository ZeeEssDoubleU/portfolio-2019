import firebase from "firebase/app"
import "firebase/firestore"

const config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
}

// initialize in index of app (index.js)
export const firebaseInit = () => {
  // initialize firebase
  firebase.initializeApp(config)
}

const db = firebase.firestore()

export const pushInquiry = (name, email, subject, message) => {
  db.collection("contact-form")
    .add({
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id)
    })
    .catch(function(error) {
      console.error("Error adding document: ", error)
    })
}
