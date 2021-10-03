import { collection, doc } from 'firebase/firestore'
import { _ChapterSummary } from 'shared'

import { db } from '../firebaseApp'
import { createConvertor, WithId } from '../lib/firestore'

export type ChapterSummaryData = _ChapterSummary.ChapterSummaryData
export type ChapterSummary = WithId<ChapterSummaryData>
export const chapterSummaryConvertor = createConvertor<ChapterSummaryData>()
export const chapterSummariesRef = ({ bookId }: { bookId: string }) => {
  return collection(db, _ChapterSummary.chapterSummariesPath({ bookId })).withConverter(
    chapterSummaryConvertor
  )
}
export const chapterSummaryRef = ({
  bookId,
  chapterSummaryId,
}: {
  bookId: string
  chapterSummaryId: string
}) => {
  return doc(db, _ChapterSummary.chapterSummaryPath({ bookId, chapterSummaryId })).withConverter(
    chapterSummaryConvertor
  )
}
