import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import { CardDetails, CardProps } from "../components/Card/Details";
import api from "../services/api";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";



function Details() {

    const  {id}  = useParams();    
       

    const [product, setProduct] = useState<CardProps>({} as CardProps);

    async function getProductData() {
      const {data} = await api.get(`products/${id}`);
      setProduct(data);       
      
    }
  
    useEffect(() => {
      getProductData();
    });

    return (
        <>
            <Header hasGoBack/>            
            <CardDetails idProduct={1} name={product.name} description={product.description} image={""} price={0} isVegan={product.isVegan} isGlutenFree={false} isEnough={2} category={0}/>
        </>
    )  
}

export default Details;