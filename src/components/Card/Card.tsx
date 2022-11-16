import { CardStyle } from "./Card.style";
import {Badge} from "../Badge/Badge"

export type CardProps = {
  idProduct: number,
  name: string,
  description: string,
  image: string,
  price: number,
  isVegan: boolean,
  isGlutenFree: boolean,
  category: number,
}

export function Card(props: CardProps) {
  return (
    <CardStyle>
      <img className="image" src={props.image} alt="" />
      <div className="info">
        <div className="badge-div">
          {props.isGlutenFree ? <Badge id="2"/> : "" }
          {props.isVegan ? <Badge id="1"/>: "" }
        </div>
      <strong>{props.name}</strong>
      <p className="description">{props.description}</p>
      <p className="price">R$ {props.price}0</p>
      </div>
    </CardStyle>
    )
}