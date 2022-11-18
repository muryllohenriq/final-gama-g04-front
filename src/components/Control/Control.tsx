import { useState } from "react";
import { CardProps } from "react-bootstrap";
import api from "../../services/api";
import Header from "../Header/Header";
import { ControlStyle } from "./Control.style";




export function Control() {

  const [tables, setTables] = useState([]);

  async function getTables() {
    const response = await api.get("tables");
    console.log(response.data[0])
  }

  return (
    <>
    <Header />
    <ControlStyle>
      <div className="title">
        <strong>Comanda</strong>
        <p className="table-card">Mesa 10</p>
      </div>
    </ControlStyle>
    </>

  )
}