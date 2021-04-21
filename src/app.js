import React, { Component } from "react";
import A from "./components/a";
import { sleep } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <A />;
  }
}

export default App;
