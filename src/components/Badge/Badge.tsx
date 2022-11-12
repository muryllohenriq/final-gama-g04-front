import { BadgeStyle } from "./Badge.style";

type BadgeProps = {
  id?: string;
  text?: string;
}

export function Badge(props: BadgeProps) {
  return (
    <BadgeStyle className={props.text ? "details" : ""}>
      <img className={props.text ? "small" : ""} src={`/src/assets/badge-${props.id}.svg`} alt="" />
      {props.text && <span>{props.text}</span>}
    </BadgeStyle>
  )
}