import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCoins } from "react-icons/fa";

export default function HeaderNavBar() {
  return (
    <div className="nav-bar">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <FaCoins className="icon" />
            CryptoPricing
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
