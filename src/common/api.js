import Firebase from 'firebase'
// Initialize Firebase
let config = {
  apiKey: "AIzaSyBmhhy1foOEeP8cH7LqQjWur2OvksjndrE",
  authDomain: "taxscam-290ce.firebaseapp.com",
  databaseURL: "https://taxscam-290ce.firebaseio.com",
  projectId: "taxscam-290ce",
  storageBucket: "",
  messagingSenderId: "645158683445"
};
let app = Firebase.initializeApp(config)
let db = app.database()
let pledgesRef = db.ref('pledges')

export default pledgesRef