import { useContext } from 'react'
import Router from 'next/router'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { DatabaseContext } from '../contexts/Database'

export default function LoginPage() {
  const { titles } = useContext(DatabaseContext)

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
