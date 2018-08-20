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
import UserDetail from "./detail";
import { connect } from "react-redux";

const mapStateToProps = (state, owmProps) => {
  let isLogin =
    state.auth.isLogin || JSON.parse(localStorage.getItem("userInfo"));
  return { isLogin };
};

class Mine extends React.Component {
  render = () => {
    let { display, isLogin } = this.props;
    return (
      <Router>
        <div style={{ display: display }}>
          <Switch>
            <Route
              path="/"
              exact
              render={() => {
                return isLogin ? (
                  <Redirect to="/info" />
                ) : (
                  <Redirect to="/nologin" />
                );
              }}
            />
            <Route path="/info" component={Info} />
            <Route path="/nologin" component={NoLogin} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/detail" component={UserDetail} />
          </Switch>
        </div>
      </Router>
    );
  };
}
Mine = connect(mapStateToProps)(Mine);
export default withRouter(Mine);
