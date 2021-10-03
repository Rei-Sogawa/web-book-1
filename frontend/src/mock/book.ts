import { Timestamp } from '@firebase/firestore'
import { uniqueId } from 'lodash-es'
import { _Book } from 'shared'

import { Book } from '../model/book'

export const createBookMock = (book?: Partial<Book>): Book => {
  return {
    ..._Book.getDefaultBookData(Timestamp.now()),
    id: uniqueId('book-'),
    ...book,
  }
}
