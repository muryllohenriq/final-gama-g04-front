import { DetailsStyle } from "./Details.style";
import { Badge } from "../Badge/Badge";
import Icon from "../../assets/icon-people.png";
import { TotalCard } from "../TotalCard/TotalCard";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../redux/storeSlice";
import { useState } from "react";


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
}
export function CardDetails(props: CardProps) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [comment, setComment] = useState("")
  

  function handleClick(Counter: number) {
    dispatch(add({ idTable: 10, idProduct: Number(id), comment, amount: Counter, name:(props.name), price:(props.price), image:(props.image) }))
  }
  return (
    <DetailsStyle>
      <div className="container" id="container">
        <img className="image" src={props.image} alt="imagens pratos" />
        <div className="info">
          <div className="badges">
            {props.isGlutenFree && <Badge name="badge2" text="Sem glúten" />}
            {props.isVegan && <Badge name="badge1" text="Vegano" />}
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
        </div>     
      <div className="ctn">
        <form className="container-2" method="" action="submit" name="">
          <div className="obs">
            <strong>Alguma observação?</strong>            
            <textarea className="textarea" placeholder="Ex:Tirar a cebola, maionese à parte" value={comment}
              onChange={(event: { target: { value: any; }; }) => setComment(event.target.value)} />
          </div>
        </form>
      </div>
      </div>

      <TotalCard show text="Adicionar à comanda" onClick={handleClick} name="details" price={props.price} tableId={10} idProduct={props.idProduct} />
    </DetailsStyle>
  );
}