import { Text } from "./Themed"

export function MonoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: "SpaceMono" }]} />
}
