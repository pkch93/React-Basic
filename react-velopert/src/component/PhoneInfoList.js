import React, {Component} from "react";
import PhoneInfo from "./PhoneInfo.js"

class PhoneInfoList extends Component {
  static defaultProps = {
    data: []
  }

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.data !== this.props.data;
  }
  render(){
    const {data, onRemove, onUpdate, onLog} = this.props;
    const list = data.map(
      info => (<PhoneInfo key={info.id} info={info}
        onRemove={onRemove} onUpdate={onUpdate} onLog={onLog}/>)
    );
    return (
      <div>
        {list}
      </div>
    );
  }
}

export default PhoneInfoList;
