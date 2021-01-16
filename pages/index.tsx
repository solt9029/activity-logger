import { faPlayCircle, faPlus, faStopCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { CSSProperties, useContext, useEffect, useState } from 'react'
import { Card, Col, Container, Navbar, NavbarBrand, Row } from 'react-bootstrap'
import { AuthContext } from '../contexts/Auth'
import { useDatabaseRef } from '../utils/hooks'

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
    <>
      <Container>
        <Row className="mb-5">
          <Col xs={12}>
            <Card>
              <Card.Body style={{ padding: '1rem' }}>
                <div>
                  <FontAwesomeIcon icon={faStopCircle} style={{ marginRight: '1rem' }} />
                  14時28分に「仕事」を開始しました
                </div>
                <div className="text-secondary small" style={{ marginLeft: '2rem' }}>
                  3時間24分30秒が経過しました
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12}>開始する活動を選択してください</Col>
        </Row>
        <Row>
          <Col xs={12} lg={6} style={{ marginBottom: '1rem' }}>
            <Card>
              <Card.Body style={{ padding: '1rem' }}>
                <FontAwesomeIcon icon={faPlayCircle} style={{ marginRight: '1rem' }} />
                仕事
                <div style={{ float: 'right' }}>
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={6} style={{ marginBottom: '1rem' }}>
            <Card>
              <Card.Body style={{ padding: '1rem' }}>
                <FontAwesomeIcon icon={faPlayCircle} style={{ marginRight: '1rem' }} />
                睡眠
                <div className="float-right">
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={6} style={{ marginBottom: '1rem' }}>
            <Card>
              <Card.Body style={{ padding: '1rem' }}>
                <FontAwesomeIcon icon={faPlayCircle} style={{ marginRight: '1rem' }} />
                読書
                <div style={{ float: 'right' }}>
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Link href="/new">
          <div style={buttonStyle} className="bg-dark">
            <FontAwesomeIcon icon={faPlus} style={{ marginTop: '16px', fontSize: '1.5rem' }} />
          </div>
        </Link>
      </Container>
    </>
  )
}
