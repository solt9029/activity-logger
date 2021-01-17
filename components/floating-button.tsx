import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { CSSProperties } from 'react'

const buttonStyle: CSSProperties = {
  position: 'fixed',
  width: '60px',
  height: '60px',
  bottom: '1rem',
  right: '1rem',
  color: '#fff',
  borderRadius: '50px',
  textAlign: 'center',
  borderColor: '#fff',
  borderWidth: '2px',
  borderStyle: 'solid',
  zIndex: 1000,
  cursor: 'pointer',
}

export const FloatingButton = () => {
  return (
    <Link href="/new">
      <div style={buttonStyle} className="bg-dark">
        <FontAwesomeIcon icon={faPlus} style={{ marginTop: '16px', fontSize: '1.5rem' }} />
      </div>
    </Link>
  )
}
