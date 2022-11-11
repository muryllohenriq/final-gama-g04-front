import { BadgeStyle } from "./Badge.style";

type BadgeProps = {
  id: string;
}

export function Badge(props: BadgeProps) {
  return (
    <BadgeStyle src={`/src/assets/badge-${props.id}.png`} alt="" />
  )
}