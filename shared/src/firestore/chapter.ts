export type Data<Timestamp> = {
  number: number
  title: string
  content: string
  wardCount: number
  images: { path: string; url: string }[]
  createdAt: Timestamp
  updatedAt: Timestamp
}

export const getDefaultData = <TimestampOrFieldValue>(
  now: TimestampOrFieldValue
): Data<TimestampOrFieldValue> => ({
  number: 0,
  title: '',
  content: '',
  wardCount: 0,
  images: [],
  createdAt: now,
  updatedAt: now,
})

export type CollectionPathParams = { bookId: string }

export type DocPathParams = CollectionPathParams & { chapterId: string }

export const getCollectionPath = ({ bookId }: CollectionPathParams) => {
  return ['books', bookId, 'chapters'].join('/')
}
