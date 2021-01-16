import { useMemo } from 'react'
import { firebase } from './firebase'

export const useDatabaseRef = (path: string, uid?: string) => {
  return useMemo(() => {
    if (uid === null || uid === undefined) {
      return undefined
    }
    return firebase.database().ref(`${path}/${uid}`)
  }, [path, uid])
}
