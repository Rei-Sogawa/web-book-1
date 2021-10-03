import * as Chapter from './chapter'

export type Data = { chapterId: string } & Pick<
  Chapter.Data<void>,
  'number' | 'title' | 'wardCount'
>

export const getDefaultData = (): Data => ({
  chapterId: '',
  number: 0,
  title: '',
  wardCount: 0,
})

export type CollectionPathParams = {
  bookId: string
}

export type DocPathParams = CollectionPathParams & {
  chapterSummaryId: string
}

export const getCollectionPath = ({ bookId }: CollectionPathParams) => {
  return ['books', bookId, 'chapterSummaries'].join('/')
}
