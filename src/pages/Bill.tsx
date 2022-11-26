import { ControlHeader } from "../components/ControlHeader/Control";
import { MenuBottom } from "../components/MenuBottom/MenuBottom";

export function Bill() {
  return(
    <>
    <ControlHeader text="Fechar conta" name="Conta" idProduct={1} tableId={1} price={0} />
    <MenuBottom />
    </>
  )
}