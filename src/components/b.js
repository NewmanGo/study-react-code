import React, { Component } from "react";
import { sleep } from "../utils";
import C from "./c";

class B extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }

  onClick = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });
  };

  render() {
    const { index } = this.props;
    const { value } = this.state;
    console.log(`render-B${index}`);

    return (
      <div className="B" onClick={this.onClick}>
        {`B${index}计数${value}`}
        <div className="child-wrap">
          {new Array(value).fill("").map((item, index) => (
            <C index={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default B;
