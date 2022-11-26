import { ControlHeader } from "../components/ControlHeader/Control";
import { MenuBottom } from "../components/MenuBottom/MenuBottom";

export function Bill() {
  const urlParams = new URLSearchParams(location.search);

  const id = urlParams.get('table');

  return(
    <>
    <ControlHeader text="Fechar conta" name="Conta" idProduct={1} tableId={id} price={0} />
    <MenuBottom />
    </>
  )
}