import _ from "lodash";
import "./style.css";
import Profile from "./profile.jpg";
import printMe from './print.js';

function component(){
  let element = document.createElement("div");
  let btn = document.createElement("button");
  element.innerHTML = _.join(["Hello", "Webpack"], ' ');
  element.classList.add("hello");

  let myProfile = new Image();
  myProfile.src = "./dist/" + Profile;
  element.appendChild(myProfile);

  btn.innerHTML = 'click!';
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
