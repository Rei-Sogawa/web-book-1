import * as admin from 'firebase-admin'

import { _BookData } from './collection/book'

export type BookData = _BookData<admin.firestore.Timestamp>
