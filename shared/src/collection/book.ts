export type _BookData<Timestamp> = {
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

export const booksPath = () => 'books'
export const bookPath = ({ bookId }: { bookId: string }) => `books/${bookId}`
