import firebase from "firebase/app"
import "firebase/database"
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

// function pushes contact form submissions to firebase database
// call in contact-form onSubmit event
export const pushInquiry = (name, email, subject, message) => {
  // get refs to databases
  const realtimeDb = firebase.database()
  const firestore = firebase.firestore()

  // push contact-form data to realtime db
  realtimeDb
    .ref("contact-form")
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
          : console.log(
              "Form submitted successfully to Firebase' realtime db :D"
            )
      }
    )

  // push contact form data to firestore
  firestore
    .collection("contact-form")
    .add({
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    })
    .then(function(docRef) {
      console.log(
        "Document written to Firebase' Firestore with ID: ",
        docRef.id
      )
    })
    .catch(function(error) {
      console.error("Error adding document: ", error)
    })
}
