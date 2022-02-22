import React from "react";
import {
  Button,
  InputGroup,
  Overlay,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { InfoCircle } from "react-bootstrap-icons";
import PopOver from "../PopOver/PopOver";
import Title from "../Title/Title";

interface CarouselListItemProps {}

const CarouselListItem: React.FunctionComponent<CarouselListItemProps> = () => {
  const [show, setShow] = React.useState(false);
  const [target, setTarget] = React.useState(null);
  const ref = React.useRef(null);

  function handleClick(e: any) {
    e.preventDefault();
    setShow(!show);
    setTarget(e.target);
  }

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
        <span>
          <Title icon={<InfoCircle onClick={handleClick} />}>
            Drone Photos
          </Title>
        </span>
      </InputGroup>

      <OverlayTrigger trigger="click" placement="right" overlay={<PopOver/>}>
        <Button variant="success">Click me to see</Button>
      </OverlayTrigger>
    </>
  );
};

export default CarouselListItem;
