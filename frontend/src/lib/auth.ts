import * as auth from 'firebase/auth'

import { auth as appAuth } from '../firebaseApp'

export const signIn = ({ email, password }: { email: string; password: string }) => {
  return auth.signInWithEmailAndPassword(appAuth, email, password)
}

export const signOut = () => {
  return auth.signOut(appAuth)
}
