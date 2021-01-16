import React from 'react'
import { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/Auth'
import 'bootstrap/dist/css/bootstrap.min.css'
import './_app.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default App
