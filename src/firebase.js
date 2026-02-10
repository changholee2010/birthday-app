import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB8LnC6au3unMVku4wCR5PVloF52rdjUok',
  authDomain: 'birthday-app-9648d.firebaseapp.com',
  projectId: 'birthday-app-9648d',
  storageBucket: 'birthday-app-9648d.firebasestorage.app',
  messagingSenderId: '756898191238',
  appId: '1:756898191238:web:be8d47bf7da5d1d3617e07',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
