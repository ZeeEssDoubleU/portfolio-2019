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

// initializeApp method requires window object.  Check for window
if (typeof window !== "undefined") {
  // initialize firebase
  firebase.initializeApp(config)
}
// Get a reference to the database service
const database = firebase.database()

export const pushInquiry = (name, email, subject, message) => {
  database
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
