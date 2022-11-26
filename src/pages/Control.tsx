import { ControlHeader } from "../components/ControlHeader/Control";
import { MenuBottom } from "../components/MenuBottom/MenuBottom";

export function Control() {
  const urlParams = new URLSearchParams(location.search);

  const id = urlParams.get('table');

  return(
    <>
    <ControlHeader text="Enviar pedido para cozinha" name="Comanda" show={true} idProduct={1} price={0} tableId={id}/>
    <MenuBottom />
    </>
  )
}