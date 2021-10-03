import { firestore } from 'firebase-admin'

import { db } from '../firebaseApp'

export type WithId<T> = T & { id: string }

export type Timestamp = firestore.Timestamp

export const createConvertor = <T>(defaultData?: T): firestore.FirestoreDataConverter<T> => ({
  toFirestore: (data: T | Partial<T>) => data,
  fromFirestore: (snap) => ({ ...defaultData, ...snap.data() } as T),
})

export const createRef = <T, PathParams>(
  collectionPath: (params: PathParams) => string,
  defaultData?: T
) => {
  const convertor = createConvertor<T>(defaultData)
  const collectionRef = (params: PathParams) => {
    return db.collection(collectionPath(params)).withConverter(convertor)
  }
  const docRef = (id: string, params: PathParams) => {
    return collectionRef(params).doc(id)
  }
  return {
    collectionRef,
    docRef,
  }
}

export const fetchDoc = async <T>(docRef: firestore.DocumentReference) => {
  const docSnap = await docRef.get()
  if (docSnap.exists) {
    return { id: docSnap.id, ...docSnap.data() } as WithId<T>
  } else {
    return undefined
  }
}

export const fetchDocs = async <T>(query: firestore.Query) => {
  const querySnap = await query.get()
  if (querySnap.empty) {
    return undefined
  } else {
    return querySnap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as WithId<T>))
  }
}
