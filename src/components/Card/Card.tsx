import { useState } from "react";
import { CardStyle, CounterStyle } from "./Card.style";
import { CustomLink } from "./Card.style";
import { Badge } from "../Badge/Badge";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import { HiOutlineTrash } from "react-icons/hi";

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
     <p className="price">R$ {props.price}0</p>
     {props.counter ? <Counter /> : ""}
    </div>
   </div>
  </CardStyle>
 );
}

function Counter() {
 const [count, setCount] = useState(1);

 return (
  <CounterStyle>
   {count === 1 ? (
    <HiOutlineTrash
     onClick={() => setCount((count) => count - 1)}
    ></HiOutlineTrash>
   ) : (
    <GrFormSubtract onClick={() => setCount((count) => count - 1)} />
   )}
   <p>{count}</p>
   <GrFormAdd onClick={() => setCount((count) => count + 1)}></GrFormAdd>
  </CounterStyle>
 );
}
