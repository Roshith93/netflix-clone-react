import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'

// Seed the db

// config firebase
const config = {
  apiKey: 'AIzaSyALUTeM7b7r9W-lsUPTEVU0wWHfytP3qvA',
  authDomain: 'netflix-clone-b2f7a.firebaseapp.com',
  databaseURL: 'https://netflix-clone-b2f7a.firebaseio.com',
  projectId: 'netflix-clone-b2f7a',
  storageBucket: 'netflix-clone-b2f7a.appspot.com',
  messagingSenderId: '383640897937',
  appId: '1:383640897937:web:3c8044098a6eb965087230',
}
// initialize
const firebase = Firebase.initializeApp(config)
// seedDatabase(firebase)
export { firebase }
