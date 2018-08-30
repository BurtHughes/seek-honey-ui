import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
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
  let isShow = (state.tab.currentTab === 4) ? null : 'none';
  return { isLogin, isShow };
};

class Mine extends React.Component {
  render = () => {
    let { isShow, isLogin } = this.props;
    return (
      <Router>
        <div style={{ display: isShow }}>
          <Switch>
            <Route path="/mine/info" component={Info} />
            <Route path="/mine/index" component={NoLogin} />
            <Route path="/mine/login" component={Login} />
            <Route path="/mine/register" component={Register} />
            <Route path="/mine/detail" component={UserDetail} />
          </Switch>
        </div>
      </Router>
    );
  };
}
Mine = connect(mapStateToProps)(Mine);
export default withRouter(Mine);
