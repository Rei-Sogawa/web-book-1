import { Timestamp } from '@firebase/firestore'
import { uniqueId } from 'lodash-es'
import { _Chapter } from 'shared'

import { Chapter } from '../model/chapter'

export const createChapterMock = (chapter?: Partial<Chapter>): Chapter => {
  return {
    ..._Chapter.getDefaultChapterData(Timestamp.now()),
    id: uniqueId('chapter-'),
    ...chapter,
  }
}
