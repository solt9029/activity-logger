import { faStopCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Col } from 'react-bootstrap'
import { Activity } from '../interfaces'

interface Props {
  onClick: () => any
  activity: Activity
}

export const CurrentActivityCard = (props: Props) => {
  return (
    <Col xs={12}>
      <Card onClick={props.onClick} style={{ cursor: 'pointer' }}>
        <Card.Body style={{ padding: '1rem' }}>
          <div>
            <FontAwesomeIcon icon={faStopCircle} style={{ marginRight: '1rem' }} />
            {props.activity.startedAt}に「{props.activity.titleName}」を開始しました
          </div>
          <div className="text-secondary small" style={{ marginLeft: '2rem' }}>
            3時間24分30秒が経過しました
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}
