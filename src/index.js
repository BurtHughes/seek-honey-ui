import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import Banner from "./js/assets/banner"
import Content from "./js/page/content"
import rootReducer from "./js/model/reducers"
import "weui"
import "react-weui/build/packages/react-weui.css"

export let store = createStore(rootReducer);

class App extends React.Component {
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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)