import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCuhAUEw9W0c_UPDiCaa4ax5YNZpBukE3s",
    authDomain: "spartan-501f0.firebaseapp.com",
    projectId: "spartan-501f0",
    storageBucket: "spartan-501f0.appspot.com",
    messagingSenderId: "695731577819",
    appId: "1:695731577819:web:c83ca2fc1defe5437cbdfe"
  };
  
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  
  export { storage };