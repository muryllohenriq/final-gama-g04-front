import { TotalDiv } from "./TotalCard.style";
import { ControlHeaderProps } from "../ControlHeader/Control"
import { Counter } from "../CounterButton/CounterButton";

export function TotalCard(props: ControlHeaderProps) {
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
    {props.name === "details" ? 
    <div className={`textbutton ${props.name}`}>
      <p className={`button ${props.name}`}>Adicionar à comanda</p>
      <p className="price-add">R$00,00</p>
    </div> : 
    <div className="textbutton">
      <p className="button">{props.text}</p>
    </div>
    }
    
    </TotalDiv>
  )
}