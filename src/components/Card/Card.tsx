import { CardStyle } from "./Card.style";
import {Badge} from "../Badge/Badge"

type CardProps = {
  cardClass?: string;
}

export function Card(props: CardProps) {
  return (
    <CardStyle className={props.cardClass}>
      <img className="image" src="/src/assets/Rectangle 4.png" alt="" />
      <div className="info">
        <div className="badge-div">
          <Badge id="1"/>
          <Badge id="2"/>
        </div>
      <strong>Guioza de legumes</strong>
      <p className="description">Texto de descrição. Texto de descrição. Texto de de...</p>
      <p className="price">R$ 00,00</p>
      </div>
    </CardStyle>
    )
}
