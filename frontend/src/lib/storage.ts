import * as storage from 'firebase/storage'

import { storage as appStorage } from '../firebaseApp'

export const uploadBytes = (path: string, blob: Blob) => {
  return storage.uploadBytes(storage.ref(appStorage, path), blob)
}

export const getDownloadURL = (path: string) => {
  return storage.getDownloadURL(storage.ref(appStorage, path))
}

export const deleteObject = (path: string) => {
  return storage.deleteObject(storage.ref(appStorage, path))
}
