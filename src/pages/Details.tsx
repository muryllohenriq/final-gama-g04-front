import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import { CardDetails, CardProps } from "../components/Card/Details";
import api from "../services/api";
import { useParams } from "react-router-dom";
import { CheckBox } from "../components/checkboxDetails/CheckBox";
import { Counter } from "../components/CounterButton/CounterButton";


function Details() {
  const { id } = useParams();

  const [product, setProduct] = useState<CardProps>({} as CardProps);

  async function getProductData() {
    const { data } = await api.get(`products/${id}`);
    setProduct(data);
  }

  useEffect(() => {
    getProductData();
  });

  return (
    <>
      <Header hasGoBack />
      <CardDetails
        idProduct={1}
        name={product.name}
        description={product.description}
        image={product.image}
        price={product.price}
        isVegan={product.isVegan}
        isGlutenFree={product.isGlutenFree}
        isEnough={2}
        category={0}
      /> 
      <Counter name= "details"/>    
      {/* <CheckBox/> */}
    </>
  );
}

export default Details;
