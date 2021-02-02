import { Component } from "react";
import { CLASS, ID, PLACEHOLDER, ROUTER } from "../common/variable";
import {
  addClickEventByClassName,
  addClickEventById,
} from "../util/dom-controller";
import "./css/daily-life.css";

export default class DailyLife extends Component {
  constructor(props) {
    super();
    this.state = {
      router: ROUTER.DAILY_LIFE_LIST,
    };
  }
  render() {
    if (this.state.router === ROUTER.DAILY_LIFE_LIST) {
      return this._makePageListTemplate();
    }
    if (this.state.router === ROUTER.DAILY_LIFE_CREATE) {
      return this._makeCreatePageTemplate();
    }
  }
  componentDidMount() {
    this.initializeListPageEvent();
  }
  componentDidUpdate() {
    this.initializeListPageEvent();
    this.initializeCreatePageEvent();
  }
  initializeListPageEvent() {
    if (this.state.router === ROUTER.DAILY_LIFE_LIST) {
      addClickEventByClassName(CLASS.DAILY_LIFE_CREATE_BUTTON, (event) => {
        this.setState({
          router: ROUTER.DAILY_LIFE_CREATE,
        });
      });
    }
  }
  initializeCreatePageEvent() {
    if (this.state.router === ROUTER.DAILY_LIFE_CREATE) {
      addClickEventById(ID.CREATE_POST_BUTTON, (event) => {
        event.preventDefault();
      });
    }
  }

  _makePageListTemplate() {
    return (
      <div>
        <div className={CLASS.DAILY_LIFE_POST_LIST}>
          <button className={CLASS.DAILY_LIFE_CREATE_BUTTON}>생성</button>
        </div>
        <div className={CLASS.DAILY_LIFE_POST}></div>
      </div>
    );
  }
  _makeCreatePageTemplate() {
    return (
      <div>
        <h2>게시물 작성</h2>
        <form>
          <div>
            <input
              id={ID.CREATE_POST_TITLE}
              placeholder={PLACEHOLDER.CREATE_POST_TITLE}
            ></input>
          </div>
          <div>
            <textarea
              id={ID.CREATE_POST_CONTENTS}
              placeholder={PLACEHOLDER.CREATE_POST_CONTENTS}
            ></textarea>
          </div>
          <button id={ID.CREATE_POST_BUTTON}>작성</button>
        </form>
      </div>
    );
  }
}
