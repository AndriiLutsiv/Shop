  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';

  const config = {
      apiKey: "AIzaSyD6O3OY24vdqDvjGH_rauX4BYoYxQ0kUJ0",
      authDomain: "shop-d0b65.firebaseapp.com",
      databaseURL: "https://shop-d0b65.firebaseio.com",
      projectId: "shop-d0b65",
      storageBucket: "shop-d0b65.appspot.com",
      messagingSenderId: "512602939180",
      appId: "1:512602939180:web:91366b9abdd8a13d385689",
      measurementId: "G-T8Q99KVCL4"
  }
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  });


  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;