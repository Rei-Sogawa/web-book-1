import { ChapterData } from './chapter'

export type ChapterSummaryData = { chapterId: string } & Pick<
  ChapterData<void>,
  'number' | 'title' | 'wardCount'
>

export const getDefaultChapterSummaryData = (): ChapterSummaryData => ({
  chapterId: '',
  number: 0,
  title: '',
  wardCount: 0,
})

export const chapterSummariesPath = ({ bookId }: { bookId: string }) => {
  return ['books', bookId, 'chapterSummaries'].join('/')
}
export const chapterSummaryPath = ({
  bookId,
  chapterSummaryId,
}: {
  bookId: string
  chapterSummaryId: string
}) => {
  return ['books', bookId, 'chapterSummaries', chapterSummaryId].join('/')
}
