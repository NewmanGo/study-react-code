import React, { Component } from "react";
import { sleep } from "../utils";
import B from "./b";

class A extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('render-A');
    return (
      <div className="A">
        A
        <div className="child-wrap">
          <B index="0" />
          <B index="1" />
        </div>
      </div>
    );
  }
}

export default A;
