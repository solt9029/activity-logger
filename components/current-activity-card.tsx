import { faStopCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Col } from 'react-bootstrap'

export const CurrentActivityCard = () => {
  return (
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
  )
}
