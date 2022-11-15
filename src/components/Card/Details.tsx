import { DetailsStyle } from "./Details.style"
import { Badge } from "../Badge/Badge"
import Icon from "../../assets/icon-people.png"

type CardProps = {
  cardClass?: string;
}

export function CardDetails(props: CardProps) {
    return (
      <DetailsStyle className={props.cardClass}>
        <img className="image" src="/src/assets/Rectangle 4.png" alt="" />
        <div className="info">
          <div className="badges">
            <Badge id="1" text="details" />
            <Badge id="2" text="details" />
          </div>
          <div className="description">
            <strong className="food-name">Guioza de legumes</strong>
            <p className="people">
              <img src={Icon} className="icon" alt="icone de pessoas"></img>
              Serve até 3 pessoas
            </p>
            <p className="text">
              Texto de descrição. Texto de descrição. Texto de descrição
            </p>
          </div>
          <p className="price">R$ 00,00</p>
        </div>
      </DetailsStyle>
    );
  }
