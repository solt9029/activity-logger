import { useContext } from 'react'
import { AuthContext } from '../contexts/Auth'
import { firebase } from '../utils/firebase'

export default function IndexPage(): JSX.Element {
  const { currentUser } = useContext(AuthContext)
  console.log(currentUser?.uid)
  return (
    <div>
      <button
        onClick={() => {
          firebase.database().ref(`current-activity/${currentUser?.uid}`).set({
            title: 'work',
            startedAt: '2020-10-12',
            finishedAt: null,
          })
        }}
      >
        add
      </button>
      <ul></ul>
    </div>
  )
}
