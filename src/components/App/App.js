import React, { Component } from "react";

import "./App.scss";
import pathToLogoSrc from "../../media/logo.svg";
import Logo from "../Logo";
import MainContent from "../MainContent";

class App extends Component {
  static propTypes = {};
  static defaultProps = {};
  static displayName = "App";

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Logo pathToSrc={pathToLogoSrc} title="Hello World!" />
          <h1>Let's TDD!</h1>
        </header>
        <main>
          <MainContent />
        </main>
      </div>
    );
  }
}

export default App;
