import { Component } from "react";
import "./css/intro.css";
import { CLASS } from "../common/variable";

export default class Intro extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div class={CLASS.INTRO_MAIN_DIV}>
        <div>
          <h1>안녕하세요</h1>
        </div>
      </div>
    );
  }
}
