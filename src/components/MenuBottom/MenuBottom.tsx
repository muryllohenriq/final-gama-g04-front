import { BtnBottom, NavbarBottom } from "./MenuBottom.style";
import { GiNewspaper } from "react-icons/gi";
import iconComanda from "../../assets/comanda-icon.svg"
import iconConta from "../../assets/conta-icon.svg"

export function MenuBottom() {
    return (
        <NavbarBottom fixed="bottom">
                <BtnBottom to="/">
                    <GiNewspaper size='28px'/>
                    Cardápio
                </BtnBottom>
            <BtnBottom to="/control">
                <img src={iconComanda} alt="" />
                Comanda
            </BtnBottom>
            <BtnBottom to="/bill">
            <img src={iconConta} alt="" />
                Conta
            </BtnBottom>
        </NavbarBottom>
    )
}