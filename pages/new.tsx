import { useEffect, useContext, useState } from 'react'
import Router from 'next/router'
import { firebase } from '../utils/firebase'
import { AuthContext } from '../contexts/Auth'
import { useDatabaseRef } from '../utils/hooks'

export default function LoginPage() {
  const { currentUser } = useContext(AuthContext)
  const databaseRef = useDatabaseRef('titles', currentUser?.uid)

  const handleClick = () => {
    databaseRef?.push({
      name: 'work',
    }) && Router.push('/')
  }

  return (
    <div className="container">
      <button onClick={handleClick}>追加</button>
    </div>
  )
}
