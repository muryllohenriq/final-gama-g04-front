
type BadgeProps = {
  id: string;
}

export function Badge(props: BadgeProps) {
  return (
    <img src={`/src/assets/badge-${props.id}.svg`} alt="" />
  )
}