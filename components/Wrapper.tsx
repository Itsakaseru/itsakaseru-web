import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export function FontAwesomeWrapper(icon: IconDefinition) {
  return (
    <FontAwesomeIcon icon={icon}/>
  )
}