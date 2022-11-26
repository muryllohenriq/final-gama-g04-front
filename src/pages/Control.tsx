import { useSelector } from "react-redux";
import { Card } from "../components/Card/Card";
import { ControlHeader } from "../components/ControlHeader/Control";
import { MenuBottom } from "../components/MenuBottom/MenuBottom";
import { StoreState } from "../redux";
import { ControlCards } from "./Control.style";

export function Control() {
  const listadePratos = useSelector(
    (state: StoreState) => state.store)

  return(
    <>
    <ControlHeader text="Enviar pedido para cozinha" name="Comanda" show={true} idProduct={1} price={0} tableId={1}/>
    <ControlCards>
    {listadePratos.map((prato) => { 
      return (
        prato.order.map((orderItem, index) => {
          return (
            <Card key={index} idProduct={orderItem.idProduct} name={orderItem.name} price={orderItem.price} image={orderItem.image} description={orderItem.comment} counter />
            )
          })
          )
        })}
      </ControlCards>
    <MenuBottom />
    </>
  )
}