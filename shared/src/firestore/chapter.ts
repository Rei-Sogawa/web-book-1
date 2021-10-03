export type ChapterData<Timestamp> = {
  number: number
  title: string
  content: string
  wardCount: number
  images: { path: string; url: string }[]
  createdAt: Timestamp
  updatedAt: Timestamp
}

export const getDefaultChapterData = <TimestampOrFieldValue>(
  now: TimestampOrFieldValue
): ChapterData<TimestampOrFieldValue> => ({
  number: 0,
  title: '',
  content: '',
  wardCount: 0,
  images: [],
  createdAt: now,
  updatedAt: now,
})

export const chaptersPath = ({ bookId }: { bookId: string }) => {
  return ['books', bookId, 'chapters'].join('/')
}
export const chapterPath = ({ bookId, chapterId }: { bookId: string; chapterId: string }) => {
  return ['books', bookId, 'chapters', chapterId].join('/')
}
