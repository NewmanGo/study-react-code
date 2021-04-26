import React, { Component, useState } from "react";
import C from "./c";

export class ClassB extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  onClick = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });
  };

  render() {
    const { value } = this.state;
    console.log(`render-ClassB`);

    return (
      <div className="B" onClick={this.onClick}>
        {`ClassB计数${value}`}
        <div className="child-wrap">
          {new Array(value).fill("").map((item, index) => (
            <C index={index} />
          ))}
        </div>
      </div>
    );
  }
}

export function HookB() {
  const [value, setValue] = useState(1);
  const [square, setSquare] = useState(1);
  const [cube, setCube] = useState(1);

  const onClick = () => {
    const newValue = value + 1;
    setValue(newValue);
    setSquare(newValue * newValue);
    setCube(newValue * newValue * newValue);
  };

  console.log(`render-HookB`);

  return (
    <div className="B" onClick={onClick}>
      {`HookB计数${value}`}
      <div className="child-wrap">
        {new Array(value).fill("").map((item, index) => (
          <C index={index} />
        ))}
      </div>
      {square} {cube}
    </div>
  );
}
