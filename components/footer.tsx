import { Container } from 'react-bootstrap'

export const Footer = () => (
  <Container
    className="mt-5 bg-dark"
    fluid
    style={{
      textAlign: 'center',
      color: 'white',
      padding: '0.7rem',
      position: 'absolute',
      bottom: 0,
      fontSize: '0.9rem',
    }}
  >
    <small>
      Created by <a href="https://twitter.com/solt9029">Kenshi Shiode</a>
    </small>
  </Container>
)
