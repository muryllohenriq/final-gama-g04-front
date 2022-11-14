import {DetailsStyle} from "./Details.style"
import {Badge} from "../Badge/Badge"

type CardProps = {
  cardClass?: string;
}

export function CardDetails(props: CardProps) {
    return (
      <DetailsStyle className={props.cardClass}>
        <img className="image" src="/src/assets/Rectangle 4.png" alt="" />
        <div className="info">
          <div className="badges">
            <Badge id="1" />
            <Badge id="2" />
          </div>
            <strong className="food-name">Guioza de legumes</strong>
            <p className="text">Texto de descrição. Texto de descrição. Texto de descrição...</p>
          <p className="price">R$ 00,00</p>
        </div>
      </DetailsStyle>
    );
  }
