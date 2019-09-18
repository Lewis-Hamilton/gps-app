import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCh5GaepYll7aLjY07pjwOokDQR-fevpsM",
  authDomain: "gps-app-24c5d.firebaseapp.com",
  databaseURL: "https://gps-app-24c5d.firebaseio.com",
  projectId: "gps-app-24c5d",
  storageBucket: "",
  messagingSenderId: "397961136738",
  appId: "1:397961136738:web:5c43578b19ac2c7d"
};
const Fire = firebase.initializeApp(config);
export default Fire;