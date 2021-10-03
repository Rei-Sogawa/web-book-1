import { _ChapterSummary } from 'shared'

import { createRef, WithId } from '../lib/firestore'

export type ChapterSummaryData = _ChapterSummary.Data
export type ChapterSummary = WithId<ChapterSummaryData>
const { collectionRef, docRef } = createRef<
  ChapterSummaryData,
  _ChapterSummary.CollectionPathParams
>(_ChapterSummary.getCollectionPath)
export const chapterSummariesRef = collectionRef
export const chapterSummaryRef = ({ bookId, chapterSummaryId }: _ChapterSummary.DocPathParams) =>
  docRef(chapterSummaryId, { bookId })
