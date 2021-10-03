export type UserData<Timestamp> = {
  email: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

export const getDefaultUserData = <TimestampOrFieldValue>(
  now: TimestampOrFieldValue
): UserData<TimestampOrFieldValue> => ({
  email: '',
  createdAt: now,
  updatedAt: now,
})

export const usersPath = () => {
  return 'users'
}
export const userPath = ({ userId }: { userId: string }) => {
  return ['users', userId].join('/')
}
