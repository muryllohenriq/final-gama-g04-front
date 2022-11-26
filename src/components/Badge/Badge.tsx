import { BadgeStyle } from "./Badge.style";
import badge1 from "../../assets/badge-1.svg"
import badge2 from "../../assets/badge-2.svg"

type BadgeProps = {
  name?: string;
  text?: string;
}

export function Badge(props: BadgeProps) {
  return (
    <BadgeStyle className={props.text ? "details" : ""}>
      <div>
      <img src={(props.name === "badge1") ? badge1 : (props.name === "badge2" ? badge2 : "")} alt="" />
      {props.text && <span>{props.text}</span>}
      </div>
    </BadgeStyle>
  )
}