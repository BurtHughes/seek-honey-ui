import React from "react";
import ReactDOM from "react-dom";
import Banner from "./js/banner";
import Content from "./js/content";
import "weui";
import "react-weui/build/packages/react-weui.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <Content />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));