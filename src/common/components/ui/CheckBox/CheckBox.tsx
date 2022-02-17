import * as React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

interface CheckBoxProps {
  radios: {name: string, value: any}[];
}

const CheckBox: React.FunctionComponent<CheckBoxProps> = ({ radios }) => {
  const [radioValue, setRadioValue] = React.useState("1");

  return (
    <ButtonGroup>
      {radios.map((radio, id) => (
        <ToggleButton
          key={id}
          id={`radio-${id}`}
          type="radio"
          name="radio"
          value={radio.value}
          checked={radioValue === radio.value}
          onChange={(e) => setRadioValue(e.currentTarget.value)}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default CheckBox;
