import React from "react";
import { Popover } from "react-bootstrap";
interface PopOverProps {

}

const PopOver: React.FunctionComponent<PopOverProps> = () => {
  return (
    <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
  );
};

export default PopOver;
