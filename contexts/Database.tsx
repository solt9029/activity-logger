import { FC, createContext, useEffect, useState, useContext } from 'react'
import { Activity, Title } from '../interfaces'
import { useDatabaseRef } from '../utils/hooks'
import { AuthContext } from './Auth'
import firebase from 'firebase'

interface Props {
  titles: Title[]
  currentActivity: Activity | null
  titlesRef: firebase.database.Reference | null | undefined
  currentActivityRef: firebase.database.Reference | null | undefined
  activityLogsRef: firebase.database.Reference | null | undefined
}

const DatabaseContext = createContext<Props>({
  titles: [],
  currentActivity: null,
  titlesRef: null,
  currentActivityRef: null,
  activityLogsRef: null,
})

const DatabaseProvider: FC = ({ children }) => {
  const { currentUser } = useContext(AuthContext)

  const [titles, setTitles] = useState<Title[]>([])
  const [currentActivity, setCurrentActivity] = useState<Activity | null>(null)

  const titlesRef = useDatabaseRef('titles', currentUser?.uid)
  const currentActivityRef = useDatabaseRef('current-activity', currentUser?.uid)
  const activityLogsRef = useDatabaseRef('activity-logs', currentUser?.uid)

  useEffect(() => {
    titlesRef?.on('value', (snapshot) => {
      if (snapshot.val()) {
        setTitles(Object.entries(snapshot.val()).map((array) => array[1]) as Title[])
      }
    })
    currentActivityRef?.on('value', (snapshot) => {
      if (snapshot.val()) {
        setCurrentActivity(snapshot.val())
      }
    })
  }, [currentUser, setTitles, setCurrentActivity])

  return (
    <DatabaseContext.Provider
      value={{ titles, currentActivity, titlesRef, currentActivityRef, activityLogsRef }}
    >
      {children}
    </DatabaseContext.Provider>
  )
}

export { DatabaseContext, DatabaseProvider }
