import React, {Component} from "react";

// class 문법 안의 코드는 항상 strict mode !
class PhoneForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      phone: "",
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // arrow function은 정적문맥을 가진다.
  // 이 때, 함수표현식과 arrow function을 쓰면 해당 함수는 this를 해당 클래스로 가진다.
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value // computed property
    });
  }
  // handleChange = function(e) {
  //   this.setState({
  //      [e.target.name]: e.target.value // computed property
  //    });
  //   }

  handleSubmit(e){
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: "",
      phone: ""
    });
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          type="number"
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">등록</button>
        <div>{this.state.name} {this.state.phone}</div>
      </form>
    );
  }
}

export default PhoneForm;
