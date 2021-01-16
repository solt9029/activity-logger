import { NavbarBrand, Container, Navbar as ReactBootstrapNavbar } from 'react-bootstrap'

export const Navbar = () => (
  <ReactBootstrapNavbar variant="dark" bg="dark" className="mb-3">
    <Container>
      <NavbarBrand>Activity Logger</NavbarBrand>
    </Container>
  </ReactBootstrapNavbar>
)
