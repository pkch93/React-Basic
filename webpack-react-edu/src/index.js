import React, {Component} from "react";
import ReactDOM from "react-dom";
import Clock from "./components/Clock/Clock.js";
import Toggle from "./components/Toggle/Toggle.js";
import List from "./components/List/List.js";
import Form from "./components/Form/Form.js";;
class App extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <Clock />
        <Toggle />
        <List />
        <Form />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
