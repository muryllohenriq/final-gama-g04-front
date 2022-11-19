import { TotalDiv } from "./TotalCard.style";

export function TotalCard() {
  return(
    <TotalDiv>
    <div className="total-price">
      <p className="total">Total</p>
      <p className="price">R$ 00,00</p>
    </div>
    <div className="text">
      <p className="button">Enviar pedido para cozinha</p>
    </div>
    </TotalDiv>
  )
}