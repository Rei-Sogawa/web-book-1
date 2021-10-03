import { collection, doc, Timestamp } from 'firebase/firestore'
import { _Book } from 'shared'

import { db } from '../firebaseApp'
import { createConvertor, createRef, WithId } from '../lib/firestore'

export type BookData = _Book.BookData<Timestamp>
export type Book = WithId<BookData>
const { collectionRef, docRef } = createRef<BookData, void>(_Book.booksPath)
export const booksRef = () => collectionRef()
export const bookRef = ({ bookId }: { bookId: string }) => docRef(bookId)
