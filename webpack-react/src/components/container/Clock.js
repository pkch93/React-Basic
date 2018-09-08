import React, {Component} from "react";
import ReactDOM from "react-dom";

class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  tick(){
    this.setState({date: new Date()})
  }

  componentDidMount(){
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID); // interval을 해제
  }
  render(){
   return (
    <div>
      <h1>Hello, world!</h1>
      <FormattedDate date={this.state.date}/>
    </div>
   );}
}

function FormattedDate(props){
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

export default Clock;
