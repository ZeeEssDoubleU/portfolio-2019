import firebase from "firebase/app"
import "firebase/database"

const config = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
}

export const firebaseInit = () => {
  // initialize firebase
  firebase.initializeApp(config)
}

// function pushes contact form submissions to firebase database
export const pushInquiry = (name, email, subject, message) => {
  // Get a reference to the database service using database() method
  firebase
    .database()
    .ref("inquiries")
    .push()
    .set(
      {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      },
      error => {
        error
          ? console.log("Form submission failed :(", error)
          : console.log("Form submission success :D")
      }
    )
}
