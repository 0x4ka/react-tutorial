import React, {useState } from "react";
import { List } from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {description: "クリック前の表示" }
  }

  changeDescription() {
    this.setState({
      description: "クリック後の表示です"
    })
  }

  render() {
    const {description} = this.state;
    return (
      <div>
        { description }
        <List title="取扱言語一覧" hoge="geho"/>
        <button onClick={() => this.changeDescription()}>ボタン</button>
      </div>
    );
  }
}

export default App;
