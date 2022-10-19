import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HeaderNavBar() {
  return (
    <div className="nav-bar">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <FaCoins className="icon" />
              CryptoPricing
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/features">Features</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/pricing">Pricing</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
