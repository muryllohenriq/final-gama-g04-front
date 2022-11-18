import { Table } from "./TableCard.style";

export type OrderProps = {
  name: string;
  comment: string;
}

export type TableCardProps = {
  id: number;
  idTable?: number;
  order?: Array<OrderProps>;
}

export function TableCard(props: TableCardProps) {
  
  return(
    <Table>Mesa {props.id}</Table>
  )
}