import { Table } from "./TableCard.style";

type OrderProps = {
  name: string;
  comment: string;
}

type TableCardProps = {
  id: number;
  idTable?: number;
  order?: Array<OrderProps>;
}

export function TableCard(props: TableCardProps) {
  
  return(
    <Table>Mesa {props.id}</Table>
  )
}