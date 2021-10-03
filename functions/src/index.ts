import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

const TOKYO = 'asia-northeast1'
const functionsWithRegion = functions.region(TOKYO)
