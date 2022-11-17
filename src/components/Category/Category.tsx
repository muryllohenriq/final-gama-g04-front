import { useState, useEffect } from "react";
import { CategoryHeader, CategoryDiv } from "./Category.style";
import { Card, CardProps } from "../Card/Card";
import api from "../../services/api";

type CategoryProps = {
 id: number;
 nome?: string;
};

export function Category(props: CategoryProps) {
 const [productList, setProductList] = useState<CardProps[]>([]);

 async function getProductData() {
  const response = await api.get("products");
  setProductList(response.data);
 }

 useEffect(() => {
  getProductData();
 }, []);

 return (
  <CategoryDiv>
   <CategoryHeader id={props.nome}>
    <span>
     {props.id === 1
      ? "Bebidas"
      : props.id === 2
      ? "Entradas"
      : props.id === 3
      ? "Saladas"
      : props.id === 4
      ? "Hambúrgueres"
      : "Sobremesas"}
    </span>
   </CategoryHeader>
   {productList
    .filter((product) =>
     props.id === 1
      ? product.category === 1
      : props.id === 2
      ? product.category === 2
      : props.id === 3
      ? product.category === 3
      : props.id === 4
      ? product.category === 4
      : product.category === 5
    )
    .map((product, index) => {
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
  </CategoryDiv>
 );
}
