import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export function FontAwesomeWrapper(icon: IconDefinition) {
  return (
    <FontAwesomeIcon icon={ icon } />
  );
}
