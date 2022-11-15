import { BadgeStyle } from "./Badge.style";

type BadgeProps = {
  id?: string;
  text?: string;
}

export function Badge(props: BadgeProps) {
  return (
    <BadgeStyle className={props.text ? "details" : ""}>
      <div>
      <img src={`/src/assets/badge-${props.id}.svg`} alt="" />
      {props.text && <span>{props.text}</span>}
      </div>
    </BadgeStyle>
  )
}