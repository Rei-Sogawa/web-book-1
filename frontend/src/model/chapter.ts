import { collection, doc, Timestamp } from 'firebase/firestore'
import { _Chapter } from 'shared'

import { db } from '../firebaseApp'
import { createConvertor, WithId } from '../lib/firestore'

export type ChapterData = _Chapter.ChapterData<Timestamp>
export type Chapter = WithId<ChapterData>
export const chapterConvertor = createConvertor<ChapterData>()
export const chaptersRef = ({ bookId }: { bookId: string }) => {
  return collection(db, _Chapter.chaptersPath({ bookId })).withConverter(chapterConvertor)
}
export const chapterRef = ({ bookId, chapterId }: { bookId: string; chapterId: string }) => {
  return doc(db, _Chapter.chapterPath({ bookId, chapterId })).withConverter(chapterConvertor)
}
