import { TotalDiv } from "./TotalCard.style";
import { ControlHeaderProps } from "../ControlHeader/Control"

export function TotalCard(props: ControlHeaderProps) {
  return(
    <TotalDiv>
    <div className="total-price">
      <p className="total">Total</p>
      <p className="price">R$ 00,00</p>
    </div>
    <div className="text">
      <p className="button">{props.text}</p>
    </div>
    </TotalDiv>
  )
}