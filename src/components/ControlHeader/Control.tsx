import { useState } from "react";
import { TableCardProps } from "../TableCard/TableCard";
import api from "../../services/api";
import Header from "../Header/Header";
import { ControlStyle } from "./Control.style";
import { TableCard } from "../TableCard/TableCard";
import { TotalCard } from "../TotalCard/TotalCard";

type ControlHeaderProps = {
  name: string;
}


export function ControlHeader(props: ControlHeaderProps) {

  const [tables, setTables] = useState<TableCardProps[]>([]);

  async function getTables() {
    const response = await api.get("tables");
    console.log(response.data[0])
  }

  return (
    <>
    <Header />
    <ControlStyle>
      <div className="title">
        <strong>{props.name}</strong>
        <TableCard id={10}/>
      </div>
      <TotalCard />
    </ControlStyle>
    </>

  )
}