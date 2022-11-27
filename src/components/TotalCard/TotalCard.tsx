import { useDispatch, useSelector } from "react-redux";
import { StoreState } from '../../redux/index';
import { add } from "../../redux/storeSlice";
import { useLocation, useParams } from "react-router-dom";
import { CounterStyle, TotalDiv } from "./TotalCard.style";
import { ControlHeaderProps } from "../ControlHeader/Control"
import { Counter } from '../CounterButton/CounterButton';
import { useEffect, useState } from 'react';
import { CardProps } from "../Card/Details";
import { CustomLink } from "../Card/Card.style";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";


export type TotalCardProps = ControlHeaderProps & {
  onClick: (Counter:number) => void;
  idProduct: number;
  price: number;
}


export function TotalCard(props: TotalCardProps) {
  const [count, setCount] = useState(1);
  const totalPrice = count * props.price

  const { search } = useLocation();
  
  return (
    <TotalDiv className={props.name}>
      <div className={`total-price ${props.name}`}>
        {props.show ? <CounterStyle className={props.name}>
          <GrFormSubtract onClick={() => setCount((count) => count > 1 ? count - 1 : count - 0)} />
          <p>{count}</p>
          <GrFormAdd onClick={() => setCount((count) => count + 1)}></GrFormAdd>
        </CounterStyle> :
          <>
            <p className="total">Total</p>
            <p className="price">{props.price && totalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
          </>
        }
      </div>
      {props.name === "details" ?
        <div className={`textbutton ${props.name}`}>
          <CustomLink to={`/${search}`}>
            <p onClick= {()=> props.onClick(count)} className={`button ${props.name}`}>Adicionar à comanda</p>
          </CustomLink>
          <p className="price-add">{props.price && totalPrice.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
        </div> :
        <div className="textbutton">
          <p className="button">{props.text}</p>
        </div>
      }
    </TotalDiv>
  )
}
