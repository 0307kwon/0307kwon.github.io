import { Component } from "react";
import { CLASS, CONTENT } from "../common/variable";
import "./css/blog.css";

export default class Blog extends Component {
  constructor(props) {
    super();
  }

  _makeNavList() {
    const nav = CONTENT.NAV;
    let list = [];
    for (let navText of nav) {
      list.push(
        <li key={navText}>
          <button>{navText}</button>
        </li>
      );
    }
    return list;
  }
  render() {
    return (
      <div class={CLASS.BLOG_MAIN_DIV}>
        <div class={CLASS.BLOG_HEADER_DIV}>
          <h1>{CONTENT.TITLE}</h1>
        </div>
        <nav>
          <ul>{this._makeNavList()}</ul>
        </nav>
        <div class={CLASS.BLOG_BODY_DIV}>
          <h1>메인페이지 입니다.</h1>
        </div>
      </div>
    );
  }
}
