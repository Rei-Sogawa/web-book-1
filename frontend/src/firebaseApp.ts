import { initializeApp } from 'firebase/app'
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions'

const app = initializeApp({
  apiKey: 'AIzaSyDKZpdYcX5iTLqoNW5XMSEac02jDyr5yLE',
  authDomain: 'playground-67a20.firebaseapp.com',
  projectId: 'playground-67a20',
  storageBucket: 'playground-67a20.appspot.com',
  messagingSenderId: '1008914470267',
  appId: '1:1008914470267:web:77fc11d8586398920bd9de',
  measurementId: 'G-P2RHN4186V',
})

const TOKYO = 'asia-northeast1'
export const functions = getFunctions(app, TOKYO)

if (process.env.NODE_ENV !== 'production') {
  connectFunctionsEmulator(functions, 'localhost', 5001)
}
