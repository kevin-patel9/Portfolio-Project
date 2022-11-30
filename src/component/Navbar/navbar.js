import { Nav, Navbar } from "react-bootstrap";
import "../../App.css";

export const PortfolioNavbar = () => {
  return (
    <Navbar expand="md px-5 py-3" bg="dark" variant="dark">
      <Navbar.Brand>PortFolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="nav" />
      <Navbar.Collapse id="nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#project">Project</Nav.Link>
          <Nav.Link href="https://github.com/kevin-patel9" target="_blank">
            Github
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
