import { CardStyle } from "./Card.style";
import { CustomLink } from "./Card.style";
import { Badge } from "../Badge/Badge";
import { Counter } from "../CounterButton/CounterButton";

export type CardProps = {
 idProduct: number;
 name: string;
 description: string;
 image: string;
 price: number;
 isVegan: boolean;
 isGlutenFree: boolean;
 category: number;
 counter?: boolean;
};

export function Card(props: CardProps) {
 return (
  <CardStyle>
   <CustomLink to={`details/${props.idProduct}`}>
    <img className="image" src={props.image} alt="" />
   </CustomLink>
   <div className="info">
    <CustomLink to={`details/${props.idProduct}`}>
     <div className="badge-div">
      {props.isGlutenFree ? <Badge id="2" /> : ""}
      {props.isVegan ? <Badge id="1" /> : ""}
     </div>
     <strong>{props.name}</strong>
     <p className="description">{props.description}</p>
    </CustomLink>
    <div className="price-div">
     <p className="price">R$ {props.price.toFixed(2)}</p>
     {props.counter ? <Counter /> : ""}
    </div>
   </div>
  </CardStyle>
 );
}
