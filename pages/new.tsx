import { useEffect, useContext, useState } from 'react'
import Router from 'next/router'
import { AuthContext } from '../contexts/Auth'
import { useDatabaseRef } from '../utils/hooks'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Title } from '../interfaces'

export default function LoginPage() {
  const { currentUser } = useContext(AuthContext)
  const titlesRef = useDatabaseRef('titles', currentUser?.uid)
  const [titles, setTitles] = useState<Title[]>([])

  useEffect(() => {
    // TODO ここらへん全部contextにまとめた方がいい
    titlesRef?.on('value', (snapshot) => {
      setTitles(Object.entries(snapshot.val()).map((array) => array[1]) as Title[])
    })
  }, [titlesRef])

  const handleClick = () => {
    titlesRef?.push({
      name: 'work',
    }) && Router.push('/')
  }

  return (
    <Container>
      <div className="mb-5">
        <Row className="mb-2">
          <Col>
            <h4>活動名の新規登録</h4>
          </Col>
        </Row>
        <Row>
          <Col lg={9} md={12}>
            <Form.Group controlId="formBasicEmail" className="w-100">
              <Form.Control type="text" placeholder="タイトル名" />
            </Form.Group>
          </Col>
          <Col lg={3} md={12}>
            <Form.Group controlId="formBasicEmail" className="w-100">
              <Button className="w-100">追加</Button>
            </Form.Group>
          </Col>
        </Row>
      </div>
      <div>
        <Row className="mb-2">
          <Col>
            <h4>活動名の一覧</h4>
          </Col>
        </Row>
        <Row>
          {titles?.map((title, index) => {
            return <div key={index}>{title.name}</div>
          })}
        </Row>
      </div>
    </Container>
  )
}
