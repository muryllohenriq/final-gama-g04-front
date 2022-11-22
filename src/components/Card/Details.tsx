import { DetailsStyle } from "./Details.style";
import { Badge } from "../Badge/Badge";
import Icon from "../../assets/icon-people.png";
import { FaProductHunt } from "react-icons/fa";

export type CardProps = {
  idProduct: number;
  name: string;
  description: string;
  image: string;
  price: number;
  isVegan: boolean;
  isGlutenFree: boolean;
  isEnough: number;
  category: number;
};

export function CardDetails(props: CardProps) {
  return (
    <DetailsStyle>
      <div className="container" id="container">
        <img className="image" src={props.image} alt="imagens pratos" />
        <div className="info">
          <div className="badges">
            {props.isGlutenFree ? <Badge id="2" text="Sem glúten" /> : ""}
            {props.isVegan ? <Badge id="1" text="Vegano" /> : ""}
          </div>
          <div className="description">
            <p className="food-name">{props.name}</p>
            <p className="people">
              <img src={Icon} className="icon" alt="icone de pessoas"></img>
              Serve {props.isEnough}{" "}
              {props.isEnough === 1 ? "Pessoa" : "pessoas"}
            </p>
            <p className="text">{props.description}</p>
          </div>
          <p className="price">R${props.price}</p>
        </div>
      </div>
    </DetailsStyle>
  );
}
