import { CustomLink } from "../Card/Card.style";

type ButtonProps = {
  link: string;
}

export function Button(props: ButtonProps) {
  return (
    <CustomLink to={`${props.link}`} />
  )
}