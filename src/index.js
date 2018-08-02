import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import Banner from "./js/assets/banner";
import Content from "./js/page/content";
import "weui";
import "react-weui/build/packages/react-weui.css";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Banner />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));