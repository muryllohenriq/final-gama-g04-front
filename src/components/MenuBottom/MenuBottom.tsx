import { BtnBottom, NavbarBottom } from "./MenuBottom.style";
import iconCardapio from "../../assets/cardapio-icon.svg"
import iconComanda from "../../assets/comanda-icon.svg"
import iconConta from "../../assets/conta-icon.svg"
import { useLocation } from 'react-router-dom';

export function MenuBottom() {
    const { search } = useLocation();

    return (
        <NavbarBottom fixed="bottom">
            <BtnBottom to={`/${search}`}>
                <img src={iconCardapio} alt="" />
                Cardápio
            </BtnBottom>
            <BtnBottom to={`/control${search}`}>
                <img src={iconComanda} alt="" />
                Comanda
            </BtnBottom>
            <BtnBottom to={`/bill${search}`}>
                <img src={iconConta} alt="" />
                Conta
            </BtnBottom>
        </NavbarBottom>
    )
}