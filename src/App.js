import { Component } from "react";
import { ROUTER } from "./common/variable.js";
import Blog from "./component/blog.js";
import Intro from "./component/intro.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      router: ROUTER.INTRO,
    };
  }
  render() {
    let template;
    if (this.state.router === ROUTER.INTRO) {
      template = this._makeIntroComponent();
    }
    if (this.state.router === ROUTER.BLOG) {
      template = this._makeBlogComponent();
    }
    console.log(template);
    return <div className="App">{template}</div>;
  }

  _makeBlogComponent() {
    return <Blog></Blog>;
  }
  _makeIntroComponent() {
    return (
      <Intro
        onClick={() => {
          this.setState({
            router: ROUTER.BLOG,
          });
        }}
      ></Intro>
    );
  }
}

export default App;
