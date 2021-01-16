import { Container } from 'react-bootstrap'

export const Footer = () => (
  <Container
    className="mt-5 bg-dark"
    fluid
    style={{
      textAlign: 'center',
      color: 'white',
      padding: '0.5rem',
      position: 'absolute',
      bottom: 0,
    }}
  >
    <small>Copyright © Kenshi Shiode. All Rights Reserved.</small>
  </Container>
)
