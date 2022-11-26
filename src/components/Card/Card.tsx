import { CardStyle } from "./Card.style";
import { CustomLink } from "./Card.style";
import { Badge } from "../Badge/Badge";
import { Counter } from "../CounterButton/CounterButton";
import { useLocation } from "react-router-dom";

export type CardProps = {
 idProduct: number;
 name: string;
 description?: string;
 image: string;
 price: number;
 isVegan?: boolean;
 isGlutenFree?: boolean;
 category?: number;
 counter?: boolean;
};

export function Card(props: CardProps) {
 const { search } = useLocation();

 return (
  <CardStyle>
   <CustomLink to={`/details/${props.idProduct}${search}`}>
    <img className="image" src={props.image} alt="" />
   </CustomLink>
   <div className="info">
    <CustomLink to={`/details/${props.idProduct}${search}`}>
     <div className="badge-div">
     {props.isGlutenFree && <Badge name="badge2" />}
      {props.isVegan && <Badge name="badge1" />}
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
