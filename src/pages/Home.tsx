import Header from "../components/Header/Header";
import { Card } from "../components/Card/Card";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Category } from "../components/Category/Category";
import "./Home.css";

function Navbar() {
  return (
    <>
      <Header />
      <NavbarBs>
        <Nav className="styledNav">
          <Button variant="outline-light" id="styleButtons" href="#Bebidas">
            Bebidas
          </Button>
          <Button variant="outline-light" id="styleButtons" href="#Entradas">
            Entradas
          </Button>
          <Button variant="outline-light" id="styleButtons" href="#Saladas">
            Saladas
          </Button>
          <Button
            variant="outline-light"
            id="styleButtons"
            href="#Hamburgueres"
          >
            Hambúrgueres
          </Button>
          <Button variant="outline-light" id="styleButtons" href="#Sobremesas">
            Sobremesas
          </Button>
        </Nav>
      </NavbarBs>
      <Container>
        <Category nome="Bebidas" />
        <Card />
        <Card />
        <Category nome="Entradas" />
        <Card />
        <Category nome="Saladas" />
        <Card />
        <Card />
        <Card />
        <Category nome="Hamburgueres" />
        <Card />
        <Category nome="Sobremesas" />
        <Card />
      </Container>
    </>
  );
}

export default Navbar;
