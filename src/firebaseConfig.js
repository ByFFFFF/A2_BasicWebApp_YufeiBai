// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore' // 导入 Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD9_hLspXydmGdzJ5pnHUmZPcDY8DW6RbE',
  authDomain: 'a3-byf-fd71f.firebaseapp.com',
  projectId: 'a3-byf-fd71f',
  storageBucket: 'a3-byf-fd71f.appspot.com',
  messagingSenderId: '957139683758',
  appId: '1:957139683758:web:c61d5c020dea65b6b2603f'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
