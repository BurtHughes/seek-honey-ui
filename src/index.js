import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, withRouter, Route, Switch, } from 'react-router-dom'
import Banner from "./js/assets/banner"
import Content from "./js/page/content"
import rootReducer from "./js/model/reducers"
import "weui"
import "react-weui/build/packages/react-weui.css"

export let store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Banner />
          <Content />
        </div>
      </Router>
    );
  }
}

//App = withRouter(App)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)