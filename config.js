import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFDIrVLxtaQLgGOxBdg-vzu-fChBKTDNs",
  authDomain: "test-8adc5.firebaseapp.com",
  projectId: "test-8adc5",
  storageBucket: "test-8adc5.appspot.com",
  messagingSenderId: "3932836734",
  appId: "1:3932836734:web:66e0dc5c2dce335f99592f",
  measurementId: "G-6M3HY5G535"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };