import React, { CSSProperties } from 'react'
import { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/Auth'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const buttonStyle: CSSProperties = {
  position: 'fixed',
  width: '60px',
  height: '60px',
  bottom: '1rem',
  right: '1rem',
  backgroundColor: '#000',
  color: '#fff',
  borderRadius: '50px',
  textAlign: 'center',
  boxShadow: '2px 2px 3px #999',
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      <div style={buttonStyle}>
        <Link href="/new">
          <FontAwesomeIcon icon={faPlus} style={{ marginTop: '18px', fontSize: '1.5rem' }} />
        </Link>
      </div>
    </>
  )
}

export default App
