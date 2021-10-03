import { collection, doc, Timestamp } from 'firebase/firestore'
import { _Book } from 'shared'

import { db } from '../firebaseApp'
import { createConvertor, WithId } from '../lib/firestore'

export type BookData = _Book.BookData<Timestamp>
export type Book = WithId<BookData>
export const bookConvertor = createConvertor<BookData>()
export const booksRef = () => {
  return collection(db, _Book.booksPath()).withConverter(bookConvertor)
}
export const bookRef = ({ bookId }: { bookId: string }) => {
  return doc(db, _Book.bookPath({ bookId })).withConverter(bookConvertor)
}
