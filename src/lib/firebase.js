import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBo2oJWqeBjCdPnaFUZtx2AoQeZ4VFAULA",
    authDomain: "chatfree-2b9c9.firebaseapp.com",
    projectId: "chatfree-2b9c9",
    storageBucket: "chatfree-2b9c9.firebasestorage.app",
    messagingSenderId: "1028156914965",
    appId: "1:1028156914965:web:634931a0ec17f7c7543d1c"
  };

const app = initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
