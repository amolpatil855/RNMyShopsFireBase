import * as  firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA6_QS4YHhQ2tuNjtBIhRpT6c77Q5nxZxM",
  authDomain: "myshops-f497a.firebaseapp.com",
  databaseURL: "https://myshops-f497a.firebaseio.com",
  projectId: "myshops-f497a",
  storageBucket: "myshops-f497a.appspot.com"
};

let app = firebase.initializeApp(config);
export const db = app.database();