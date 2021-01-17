import { faPlayCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Col } from 'react-bootstrap'

interface Props {
  name: string
  onClick: () => void
}

export const TitleCard = (props: Props) => {
  return (
    <Col xs={12} lg={6} style={{ marginBottom: '1rem' }}>
      <Card style={{ cursor: 'pointer' }} onClick={props.onClick}>
        <Card.Body style={{ padding: '1rem' }}>
          <FontAwesomeIcon icon={faPlayCircle} style={{ marginRight: '1rem' }} />
          {props.name}
          <div className="float-right">
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}
