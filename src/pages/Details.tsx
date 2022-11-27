import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import { CardDetails, CardProps } from '../components/Card/Details';
import api from "../services/api";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from "../redux";


export function Details() {
  const { id } = useParams();
  const dispatch = useDispatch(
    
  );
  const TotalCard = useSelector(
    (state: StoreState) => state.store);  
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
        isEnough={product.isEnough}
        category={product.category}        
      /> 
      
    </>
  );
}

export default Details;
