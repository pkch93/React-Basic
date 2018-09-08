import React, {Component} from "react";

class List extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    const numbers = [1,2,3,4,5];
    const listItems = numbers.map((num) =>
      <li key={num.toString()}>{num}</li>
    );
    return(
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default List;
