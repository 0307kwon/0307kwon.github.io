import { Component } from "react";
import { ROUTER } from "./common/variable.js";
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
      template = <Intro onClick={() => {}}></Intro>;
    }
    return <div className="App">{template}</div>;
  }
}

export default App;
