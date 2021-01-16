import React from 'react'
import { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/Auth'
import 'bootstrap/dist/css/bootstrap.min.css'
import './_app.css'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
