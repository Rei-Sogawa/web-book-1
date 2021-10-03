import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

import { Book, Chapter } from 'shared'

const TOKYO = 'asia-northeast1'
const functionsWithRegion = functions.region(TOKYO)

export const hello = functionsWithRegion.https.onRequest((req, res) => {
  res.status(200).send('Hello')
})
