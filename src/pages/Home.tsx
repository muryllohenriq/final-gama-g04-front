import Header from "../components/Header/Header";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Category } from "../components/Category/Category";
import "./Home.css";
import { MenuBottom } from "../components/MenuBottom/MenuBottom";

function Navbar() {
  return (
    <>
      <Header hasSearch/>
      <NavbarBs style={{ marginTop: "63px", backgroundColor: "#FCFCFC", height: "60px", justifyContent:"center", alignItems: "center"
      }}      
        fixed="top"
      >
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
      <Container className="styledCards">
        <Category id={1} />
        <Category id={2} />
        <Category id={3} />
        <Category id={4} />
        <Category id={5} />
      </Container>
      <MenuBottom />
    </>
  );
}

export default Navbar;
