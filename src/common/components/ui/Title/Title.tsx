import * as React from "react"
import "./Title.scss"

interface TitleProps {
  type: string;
  name: string;
}

const Title: React.FunctionComponent<TitleProps> = (props: TitleProps) => {
  return <h1 className={props.type}>{props.name}</h1>;
};

export default Title;
