export type BookData<Timestamp> = {
  title: string
  description: string
  authorNames: string[]
  image: { path: string; url: string } | null
  price: number
  published: boolean
  releasedAt: Timestamp | null
  createdAt: Timestamp
  updatedAt: Timestamp
  purchaserIds: string[]
}

export const getDefaultBookData =
  <FieldValue>(serverTimestamp: () => FieldValue) =>
  (): BookData<FieldValue> => ({
    title: '',
    description: '',
    authorNames: [],
    image: null,
    price: 0,
    published: false,
    releasedAt: null,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    purchaserIds: [],
  })

export const booksPath = () => {
  return 'books'
}
export const bookPath = ({ bookId }: { bookId: string }) => {
  return ['books', bookId].join('/')
}
