import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app"
import { events } from "./mocks.js"

ReactDOM.render(<App events={events} />, document.querySelector('#root'))