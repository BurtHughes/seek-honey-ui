import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import Info from "./info";
import NoLogin from "./no-login";
import Register from "./register";
import Login from "./login";

export default class Mine extends React.Component {
  state = {
    isLogin: false
  };

  constructor(){
    super();
    this.logedIn = this.logedIn.bind(this);
  }

  // 设置登录状态
  logedIn = () => {
    this.setState({isLogin: true});
  }

  render = () => {
    return (
      <Router>
        <div style={{ display: this.props.display }}>
          {/* <Link to="/nologin">未登录时</Link>
                <Link to="/login">去登录</Link>
                <Link to="/register">去注册</Link>
                <Link to="/info">登录后</Link> */}
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return this.state.isLogin ? <Redirect to="/info"/> : <NoLogin logedIn={this.logedIn} />;
              }}
            />
            <Route path="/info" component={Info}/>
            <Route path="/login" component={()=>{return <Login logedIn={this.logedIn}/>}} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    );
  };
}