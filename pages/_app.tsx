import React from 'react'
import { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/Auth'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default App
