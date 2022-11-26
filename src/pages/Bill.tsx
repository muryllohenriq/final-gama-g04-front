import { useEffect, useState } from "react";
import { ControlHeader } from "../components/ControlHeader/Control";
import { MenuBottom } from "../components/MenuBottom/MenuBottom";
import api from "../services/api";

type OrderProps = {
  order: {
        name: string;
        comment: string;
    },
}

type TableProps = {
    id: string;
    idTable: string;
    command: number;
    order: OrderProps[];
}

export function Bill(props: TableProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [orderList, setOrderList] = useState<TableProps[]>([])

  async function getOrderData() {
    const {data} = await api.get("tables/1")
    
    setOrderList(data.order);
    setIsLoading(false)
  }

  useEffect(() => { 
    getOrderData()
  }, [])

  if (isLoading) {
    return null;
  }

  return(
    <>
    <ControlHeader text="Fechar conta" name="Conta" idProduct={1} tableId={1} price={0} />
    <MenuBottom />
    </>
  )
}