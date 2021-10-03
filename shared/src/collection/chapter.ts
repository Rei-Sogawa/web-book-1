export type ChapterData<Timestamp> = {
  number: number
  title: string
  content: string
  wardCount: number
  images: { path: string; url: string }[]
  createdAt: Timestamp
  updatedAt: Timestamp
}

export const getDefaultChapterData =
  <FieldValue>(serverTimestamp: () => FieldValue) =>
  (): ChapterData<FieldValue> => ({
    number: 0,
    title: '',
    content: '',
    wardCount: 0,
    images: [],
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })

export const chaptersPath = ({ bookId }: { bookId: string }) => {
  return `books/${bookId}/chapters`
}
export const chapterPath = ({ bookId, chapterId }: { bookId: string; chapterId: string }) => {
  return `books/${bookId}/chapters/${chapterId}`
}
