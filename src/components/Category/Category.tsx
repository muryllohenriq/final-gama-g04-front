import { ReactNode } from "react";
import { CategoryHeader } from "./Category.style";

type CategoryProps = {
  nome: string;
};

export function Category(props: CategoryProps) {
  return (
    <CategoryHeader id={props.nome}>
      <span> {props.nome}</span> 
    </CategoryHeader>
  );
}
