import { DetailsStyle } from "./Details.style"
import { Badge } from "../Badge/Badge"
import Icon from "../../assets/icon-people.png"

export type CardProps = {
  idProduct: number,
  name: string,
  description: string,
  image: string,
  price: number,
  isVegan: boolean,
  isGlutenFree: boolean,
  isEnough: number,
  category: number,
};

export function CardDetails(props: CardProps) {
    return (
      <DetailsStyle>
        <div className="container">
          <img className="image" src="/src/assets/Rectangle 4.png" alt="" />
          <div className="info">
            <div className="badges">
            {props.isGlutenFree ? <Badge id="2" text="details"/> : ""}
            {props.isVegan ? <Badge id="1" text="details"/> : ""}
            </div>
            <div className="description">
              <p className="food-name">{props.name}</p>
              <p className="people">
                <img src={Icon} className="icon" alt="icone de pessoas"></img>
                {props.isEnough}
              </p>
              <p className="text">
              {props.description}
              </p>
            </div>
            <p className="price">R$ 00,00</p>
          </div>
        </div>
      </DetailsStyle>
    );
  }
