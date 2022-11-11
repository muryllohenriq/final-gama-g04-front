import { CardStyle } from "./Card.style";
import {Badge} from "./Badge"

export function Card() {
    return (
        <CardStyle>
          <div className="image"><img src="/src/assets/Rectangle 4.png" alt="" /></div>
          <div className="info">
            <div className="card-header">
            <strong>Nome</strong>
            <div className="badge-div">
              <Badge id="1"/>
              <Badge id="2" />
            </div>
            </div>
            <p className="description">Texto de descrição. Texto de descrição. Texto de de...</p>
            <p className="price">R$00,00</p>
          </div>
        </CardStyle>
    )
}