import React, {Component} from "react";
import ReactDOM from "react-dom";
import PhoneForm from "./component/PhoneForm.js";
import PhoneInfoList from "./component/PhoneInfoList.js"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      information: [
        {
          id: 0,
          name: "박경철",
          phone: "010-8616-4092",
        },
        {
          id: 1,
          name: "박경호",
          phone: "010-0482-2940",
        },
      ],
      keyword: ""
    }
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate(data) {
    const {information} = this.state;
    let id = information.length;
    this.setState({
      information: information.concat({
        id: id,
        ...data
      })
    });
  }

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
        ? {...info, ...data}
        : info
      )
    });
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }
  handleClick = (e) => {
    console.log(e.target);
  }
  render(){
    const {information, keyword} = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
      return(
        <div>
          <PhoneForm
            onCreate={this.handleCreate}
          />

        <p>
          <input
            placeholder="검색 할 이름을 입력하세요.."
            onChange={this.handleChange}
            value={this.state.keyword}
          />
        </p>
        <PhoneInfoList
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
          onLog={this.handleClick}
        />
        </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
