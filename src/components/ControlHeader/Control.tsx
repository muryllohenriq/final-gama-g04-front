import { useEffect, useState } from "react";
import { TableCardProps } from "../TableCard/TableCard";
import api from "../../services/api";
import Header from "../Header/Header";
import { ControlStyle } from "./Control.style";
import { TableCard } from "../TableCard/TableCard";
import { TotalCard } from "../TotalCard/TotalCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../redux";
import { CustomLink } from "../Card/Card.style";

export type ControlHeaderProps = {
  name?: string;
  text: string;
  show?: boolean;
  price: number;
  tableId:number | string | null;
  idProduct: number;
}


export function ControlHeader(props: ControlHeaderProps) {
  const { id } = useParams();
  const  dispatch = useDispatch();
  const [tables, setTables] = useState<TableCardProps[]>([]);

  async function getTables() {
    const {data} = await api.get("tables");
    setTables(data)
  }
  useEffect(() => {
    getTables();
  });

  function handleClick() {
  }

  return (
    <>
    <Header hasGoBack />
    <ControlStyle>
      <div className="title">
        <strong>{props.name}</strong>
        <TableCard id={props.tableId}/>
      </div>
      <CustomLink to={"/confirmed"}>
      <TotalCard onClick={handleClick} text={props.text} price={props.price} tableId={props.tableId} idProduct={props.idProduct}/>
      </CustomLink>
      {props.show && 
      <div className="checkout">
        <button className="checkout-text">Confira seu pedido abaixo antes de enviar</button>
      </div>
      }
    </ControlStyle>
    </>

  )
}