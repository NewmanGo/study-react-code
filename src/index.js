import React, { Component, Suspense, Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./app";

ReactDOM.render(React.createElement(App), document.getElementById("app"));

module.hot && module.hot.accept();
