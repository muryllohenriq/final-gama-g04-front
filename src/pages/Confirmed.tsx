import { CustomLink } from "../components/Card/Card.style";
import Header from "../components/Header/Header";
import {Button, ConfirmedStyle} from "./Confirmed.style"

export function Confirmed() {
  return (
    <>
    <Header />
    <ConfirmedStyle>
    <img src="/src/assets/animation.gif" alt=""/>
    <p>
      <strong>
        Pedido sendo preparado! <br />
      </strong>
      Enquanto isso, que tal conferir nossas outras delícias?
    </p>
    <CustomLink to={'/'}>
    <Button>Voltar ao cardápio</Button>
    </CustomLink>
    </ConfirmedStyle>
    </>
  )
}