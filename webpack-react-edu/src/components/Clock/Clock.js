import React, {Component} from "react";
import "./Clock.css";
class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
  }

  tick() {
    this.setState(
      {date: new Date()}
    )
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  render(){
    return(
      <div>
        <h1>Hello World!</h1>
        <p className="times">It is {this.state.date.toLocaleTimeString()}.</p>
      </div>
    );
  }
}
export default Clock;
