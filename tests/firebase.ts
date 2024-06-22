import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDQ1wGFsuDsY5sNAC9Ks00vMjdshdNgB_c',
  authDomain: 'test-6ca0e.firebaseapp.com',
  projectId: 'test-6ca0e',
  storageBucket: 'test-6ca0e.appspot.com',
  messagingSenderId: '747163342871',
  appId: '1:747163342871:web:13408fe62f4ed239d22452'
}

export const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
