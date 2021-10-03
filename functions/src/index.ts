import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

import { Book, Chapter } from 'shared'

const TOKYO = 'asia-northeast1'
const functionsWithRegion = functions.region(TOKYO)

export const hello = functionsWithRegion.https.onCall(() => {
  return 'Hello World'
})

export const goodBye = functionsWithRegion.https.onCall(() => {
  return 'Good Bye World'
})
