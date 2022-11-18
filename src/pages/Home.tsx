import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import { Card, CardProps } from "../components/Card/Card";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Category } from "../components/Category/Category";
import api from "../services/api";
import "./Home.css";
import { MenuBottom } from "../components/MenuBottom/MenuBottom";

function Navbar() {
  const [productList, setProductList] = useState<CardProps[]>([]);

  async function getProductData() {
    const response = await api.get("products");
    setProductList(response.data);
  }

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      <Header />
      <NavbarBs style={{marginTop: '63px', backgroundColor: 'white', height: '60px'}} fixed="top">
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
      <Container className="styledCards" style={{marginTop: '63px'}}>
        <Category nome="Bebidas" />
        {productList.map((product, index) => {
          return (
            <Card
              key={index}
              idProduct={product.idProduct}
              name={product.name}
              isGlutenFree={product.isGlutenFree}
              isVegan={product.isVegan}
              category={product.category}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          );
        })}
        <Category nome="Entradas" />
        {productList.map((product, index) => {
          return (
            <Card
              key={index}
              idProduct={product.idProduct}
              name={product.name}
              isGlutenFree={product.isGlutenFree}
              isVegan={product.isVegan}
              category={product.category}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          );
        })}
        <Category nome="Saladas" />
        {productList.map((product, index) => {
          return (
            <Card
              key={index}
              idProduct={product.idProduct}
              name={product.name}
              isGlutenFree={product.isGlutenFree}
              isVegan={product.isVegan}
              category={product.category}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          );
        })}
        <Category nome="Hamburgueres" />
        {productList.map((product, index) => {
          return (
            <Card
              key={index}
              idProduct={product.idProduct}
              name={product.name}
              isGlutenFree={product.isGlutenFree}
              isVegan={product.isVegan}
              category={product.category}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          );
        })}
        <Category nome="Sobremesas" />
        {productList.map((product, index) => {
          return (
            <Card
              key={index}
              idProduct={product.idProduct}
              name={product.name}
              isGlutenFree={product.isGlutenFree}
              isVegan={product.isVegan}
              category={product.category}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </Container>
      <MenuBottom />
    </>
  );
}

export default Navbar;
