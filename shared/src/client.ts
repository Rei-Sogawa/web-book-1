import * as firestore from 'firebase/firestore'

import { _BookData } from './collection/book'

export type BookData = _BookData<firestore.Timestamp>
