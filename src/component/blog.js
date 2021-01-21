import { Component } from "react";
import { CLASS, CONTENT, ROUTER } from "../common/variable";
import "./css/blog.css";

export default class Blog extends Component {
  constructor(props) {
    super();
    this.state = {
      router: ROUTER.HOME,
    };
  }

  _makeNavList() {
    const nav = CONTENT.NAV;
    let list = [];
    for (let navText of nav) {
      list.push(
        <li key={navText}>
          <button
            onClick={() => {
              this.setState({
                router: navText,
              });
            }}
          >
            {navText}
          </button>
        </li>
      );
    }
    return list;
  }
  render() {
    let contentsView;
    if (this.state.router === ROUTER.HOME) {
      contentsView = this._makeHomeView();
    }
    if (this.state.router === ROUTER.DAILY_LIFE) {
      contentsView = this._makeDailyLifeView();
    }
    if (this.state.router === ROUTER.GUEST_BOOK) {
      contentsView = this._makeGuestBookView();
    }
    return (
      <div class={CLASS.BLOG_MAIN_DIV}>
        <div class={CLASS.BLOG_HEADER_DIV}>
          <h1>{CONTENT.TITLE}</h1>
        </div>
        <nav>
          <ul>{this._makeNavList()}</ul>
        </nav>
        <div class={CLASS.BLOG_BODY_DIV}>{contentsView}</div>
      </div>
    );
  }

  _makeHomeView() {
    return <h1>메인페이지 입니다.</h1>;
  }
  _makeDailyLifeView() {
    return <h1>일상입니다.</h1>;
  }
  _makeGuestBookView() {
    return <h1>방명록입니다.</h1>;
  }
}
