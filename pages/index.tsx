import { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CurrentActivityCard } from '../components/current-activity-card'
import { FloatingButton } from '../components/floating-button'
import { TitleCard } from '../components/title-card'
import { AuthContext } from '../contexts/Auth'
import { Activity } from '../interfaces'
import { generateGoogleCalendarLink } from '../utils'
import { useDatabaseRef } from '../utils/hooks'

export default function IndexPage() {
  const { currentUser } = useContext(AuthContext)
  const currentActivityRef = useDatabaseRef('current-activity', currentUser?.uid)
  const activityLogsRef = useDatabaseRef('activity-logs', currentUser?.uid)
  const [currentActivity, setCurrentActivity] = useState<Activity | null>(null)

  useEffect(() => {
    currentActivityRef?.on('value', (snapshot) => {
      setCurrentActivity(snapshot.val())
      // currentActivityRef?.set({
      //   startedAt: '2020-10-12',
      //   titleName: 'test',
      // })
    })
  }, [currentUser, setCurrentActivity])

  return (
    <>
      <Container>
        {currentActivity !== null && (
          <Row className="mb-5">
            <CurrentActivityCard
              activity={currentActivity}
              onClick={() => {
                const finishedActivity = currentActivity
                activityLogsRef?.push(currentActivity) &&
                  currentActivityRef?.set(null) &&
                  window.open(generateGoogleCalendarLink(finishedActivity.titleName), '_blank')
              }}
            />
          </Row>
        )}
        <Row className="mb-3">
          <Col xs={12}>次に開始する活動を選択してください</Col>
        </Row>
        <Row>
          <TitleCard name="睡眠" onClick={() => {}} />
          <TitleCard name="読書" onClick={() => {}} />
          <TitleCard name="仕事" onClick={() => {}} />
        </Row>
        <FloatingButton />
      </Container>
    </>
  )
}
