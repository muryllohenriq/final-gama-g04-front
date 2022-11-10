import Header from "../components/Header";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import "./Home.css";

function Navbar() {
  return (
    <>
      <NavbarBs>
        <Container>
          <Nav>
            <Button variant="secondary" href="#bebidas">
              Bebidas
            </Button>{" "}
            <Button id="styleButtons" href="#entradas">
              Entradas
            </Button>{" "}
            <Button id="styleButtons" href="#saladas">
              Saladas{" "}
            </Button>
            <Button id="styleButtons" href="#hamburgueres">
              Hambúrgueres{" "}
            </Button>
          </Nav>
        </Container>
      </NavbarBs>
    </>
  );
}

export default Navbar;
