import { Timestamp } from 'firebase/firestore'
import { _User } from 'shared'

import { createRef, WithId } from '../lib/firestore'

export type UserData = _User.UserData<Timestamp>
export type User = WithId<UserData>
const { collectionRef, docRef } = createRef<UserData, void>(_User.usersPath)
export const usersRef = () => collectionRef()
export const userRef = ({ userId }: { userId: string }) => docRef(userId)
