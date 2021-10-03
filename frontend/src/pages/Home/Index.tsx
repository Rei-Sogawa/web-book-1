import { range } from 'lodash-es'
import { VFC } from 'react'

import { createBookMock } from '../../mock/book'
import { createChapterMock } from '../../mock/chapter'

const books = range(0, 10).map(() => createBookMock())
const chapters = range(0, 10).map(() => createChapterMock())

const HomePage: VFC = () => {
  console.log(books)
  console.log(chapters)

  return <div>HomePage</div>
}

export default HomePage
