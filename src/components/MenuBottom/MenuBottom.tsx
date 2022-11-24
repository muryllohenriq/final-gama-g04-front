import { BtnBottom, NavbarBottom } from "./MenuBottom.style";
import iconCardapio from "../../assets/cardapio-icon.svg"
import iconComanda from "../../assets/comanda-icon.svg"
import iconConta from "../../assets/conta-icon.svg"

export function MenuBottom() {
    return (
        <NavbarBottom fixed="bottom">
            <BtnBottom to="/">
                <img src={iconCardapio} alt="" />
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