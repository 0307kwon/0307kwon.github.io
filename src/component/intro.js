import { Component } from "react";
import { CLASS } from "../common/variable";
import "./css/intro.css";

export default class Intro extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className={CLASS.INTRO_MAIN_DIV}>
        <div>
          <img src="/image/root-background.jpg" width="500px"></img>
          <h1>안녕하세요</h1>
          <p>권세진 입니다</p>
          <button
            onClick={(event) => {
              event.preventDefault();
              this.props.onClick();
            }}
          >
            enter
          </button>
        </div>
      </div>
    );
  }
}
