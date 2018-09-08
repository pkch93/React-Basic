import React, {Component} from "react";
import ReactDOM from "react-dom";
import Clock from "./components/container/Clock.js";

class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <Clock />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
