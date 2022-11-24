import { useDispatch, useSelector } from "react-redux";
import { StoreState } from '../../redux/index';
import { add } from "../../redux/storeSlice";
import { useParams } from "react-router-dom";
import { TotalDiv } from "./TotalCard.style";
import { ControlHeaderProps } from "../ControlHeader/Control"
import { Counter } from "../CounterButton/CounterButton";
import { useEffect, useState } from 'react';
import api from "../../services/api";
import { CardProps } from "../Card/Details";


export type TotalCardProps  = ControlHeaderProps&{
  onClick?: () => void
}


export function TotalCard(props:TotalCardProps) {
  

  const totalCard = useSelector((state:StoreState) => state.store);
  const { id } = useParams();

  const dispatch = useDispatch();
  const [product, setProduct] = useState<CardProps>({} as CardProps);
  const produtosAdicionados = useSelector(
    (state: StoreState) => state.store
  );


// async function getProductData() {
//   const { data } = await api.get(`products/${id}`);
//   setProduct(data);  
// }

// useEffect(() => {
//   getProductData();
// });
  

  return(
    <TotalDiv className={props.name}>
    <div className={`total-price ${props.name}`}>
      {props.show ? <Counter name="details"/> :
      <>
      <p className="total">Total</p>
      <p className="price">R$ 00,00</p>
      </>
    }
    </div>
    {/* {produtosAdicionados.find(product: Number => Number(product) === Number(id))} */}
    {props.name === "details" ? 
    <div className={`textbutton ${props.name}`}>
      <p onClick={props.onClick} className={`button ${props.name}`}>Adicionar à comanda</p>
      <p className="price-add"></p>
    </div> : 
    <div className="textbutton">
      <p className="button">{props.text}</p>
    </div>
    }
    
    </TotalDiv>
  )
}
