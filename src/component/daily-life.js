import { Component } from "react";
import { CLASS } from "../common/variable";
import "./css/daily-life.css";

export default class DailyLife extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className={CLASS.DAILY_LIFE_POST_LIST}></div>
        <div className={CLASS.DAILY_LIFE_POST}></div>
      </div>
    );
  }
}
