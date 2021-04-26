import React, { Component } from "react";
import { ClassB, HookB } from "./b";

class A extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("render-A");
    return (
      <div className="A">
        A
        <div className="child-wrap">
          <ClassB />
          <HookB />
        </div>
      </div>
    );
  }
}

export default A;
