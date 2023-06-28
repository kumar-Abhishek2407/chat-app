import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDrUPAJqnR7Sngr06zvjon7ZM4HQM6052E',
  authDomain: 'chat-web-app-4fa55.firebaseapp.com',
  databaseURL: 'https://chat-web-app-4fa55-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-4fa55',
  storageBucket: 'chat-web-app-4fa55.appspot.com',
  messagingSenderId: '70046249317',
  appId: '1:70046249317:web:dcbb8d46c40a18e69db18c',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
