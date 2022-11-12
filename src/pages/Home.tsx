import Header from "../components/Header/Header";
import {Card} from "../components/Card/Card"
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Badge } from "../components/Badge/Badge";
import "./Home.css";

function Navbar() {
  return (
    <>
      <NavbarBs>
        <Container>
          <Nav className="styledNav">
            <Button variant="outline-light" id="styleButtons" href="#bebidas">
              Bebidas
            </Button>{" "}
            <Button variant="outline-light" id="styleButtons" href="#entradas">
              Entradas
            </Button>{" "}
            <Button variant="outline-light" id="styleButtons" href="#saladas">
              Saladas
            </Button>{" "}
            <Button
              variant="outline-light"
              id="styleButtons"
              href="#hamburgueres"
            >
              Hambúrgueres
            </Button>{" "}
          </Nav>
        </Container>
      </NavbarBs>
    </>
  );
}

export default Navbar;
