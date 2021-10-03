import { Timestamp } from 'firebase/firestore'
import { _Chapter } from 'shared'

import { createRef, WithId } from '../lib/firestore'

export type ChapterData = _Chapter.Data<Timestamp>
export type Chapter = WithId<ChapterData>
const { collectionRef, docRef } = createRef<ChapterData, _Chapter.CollectionPathParams>(
  _Chapter.getCollectionPath
)
export const chaptersRef = ({ bookId }: _Chapter.CollectionPathParams) => collectionRef({ bookId })
export const chapterRef = ({ bookId, chapterId }: _Chapter.DocPathParams) =>
  docRef(chapterId, { bookId })
