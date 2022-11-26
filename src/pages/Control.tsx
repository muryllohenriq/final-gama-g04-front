import { ControlHeader } from "../components/ControlHeader/Control";
import { MenuBottom } from "../components/MenuBottom/MenuBottom";

export function Control() {
  return(
    <>
    <ControlHeader text="Enviar pedido para cozinha" name="Comanda" show={true} idProduct={1} price={0} tableId={1}/>
    <MenuBottom />
    </>
  )
}