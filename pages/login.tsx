import { useEffect, useContext } from 'react'
import Router from 'next/router'
import { firebase } from '../utils/firebase'
import { AuthContext } from '../contexts/Auth'

export default function LoginPage() {
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    currentUser && Router.push('/')
  }, [currentUser])

  const login = (): void => {
    const provider = new firebase.auth.TwitterAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  return (
    <div className="container">
      <button onClick={login}>twitterでログインする</button>
    </div>
  )
}
