import React, { Component } from "react";
import { sleep } from "../utils";

class C extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    sleep(10);

    const { index } = this.props;
    console.log(`render-C${index}`);

    return <div className="C">{`C${index}`}</div>;
  }
}

export default C;
