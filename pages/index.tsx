import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/Auth'
import { useDatabaseRef } from '../utils/hooks'

export default function IndexPage() {
  const { currentUser } = useContext(AuthContext)
  const databaseRef = useDatabaseRef('current-activity', currentUser?.uid)
  const [value, setValue] = useState<any>(null)

  useEffect(() => {
    databaseRef?.on('value', (snapshot) => {
      console.log(snapshot.val())
      setValue(snapshot.val())
    })
  }, [currentUser, setValue])

  const handleClick = () => {
    databaseRef?.set({
      title: 'work',
      startedAt: '2020-10-20',
      finishedAt: null,
    })
  }

  return (
    <div>
      <button onClick={handleClick}>add</button>
      <ul>
        <div>{value.title}</div>
      </ul>
    </div>
  )
}
