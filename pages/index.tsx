import { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CurrentActivityCard } from '../components/current-activity-card'
import { FloatingButton } from '../components/floating-button'
import { TitleCard } from '../components/title-card'
import { AuthContext } from '../contexts/Auth'
import { useDatabaseRef } from '../utils/hooks'

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
          <CurrentActivityCard />
        </Row>
        <Row className="mb-3">
          <Col xs={12}>次に開始する活動を選択してください</Col>
        </Row>
        <Row>
          <TitleCard name="睡眠" />
          <TitleCard name="読書" />
          <TitleCard name="仕事" />
        </Row>
        <FloatingButton />
      </Container>
    </>
  )
}
