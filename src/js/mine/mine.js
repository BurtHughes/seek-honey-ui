import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
  withRouter
} from "react-router-dom";
import Info from "./info";
import NoLogin from "./no-login";
import Register from "./register";
import Login from "./login";

class Mine extends React.Component {
  state = {
    isLogin: false
  };

  constructor(){
    super();
    this.logedIn = this.logedIn.bind(this);
  }

  logedIn = () => {
    this.setState({isLogin: true});
  }

  logedOut = () => {
    this.setState({isLogin: false});
    this.props.history.push("/nologin");
    //this.props.location.reload();
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
                return this.state.isLogin ? <Redirect to="/info"/> : <Redirect to="/nologin"/>;
              }}
            />
            <Route path="/info" component={()=>{return <Info logedOut={this.logedOut}/>}}/>
            <Route path="/nologin" component={NoLogin}/>
            <Route path="/login" component={()=>{return <Login logedIn={this.logedIn}/>}} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    );
  };
}
export default withRouter(Mine)