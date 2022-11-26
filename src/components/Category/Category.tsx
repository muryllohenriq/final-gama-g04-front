import { useState, useEffect } from "react";
import { CategoryHeader, CategoryDiv } from "./Category.style";
import { Card, CardProps } from "../Card/Card";
import api from "../../services/api";

const categoryTitle = ["", "Bebidas" , "Entradas", "Saladas", "Hamburgueres", "Sobremesas"]

type CategoryProps = {
 id: number;
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
  <CategoryDiv id={categoryTitle[props.id]}>
   <CategoryHeader>
    <span>
      {categoryTitle[props.id]}
    </span>
   </CategoryHeader>
   {productList
    .filter((product) =>
     props.id === product.category
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
