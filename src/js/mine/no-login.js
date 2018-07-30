import React from "react";
import { ButtonArea, Button } from "react-weui";
import { withRouter, Link, BrowserRouter as Router } from "react-router-dom";

class NoLogin extends React.Component {
  constructor() {
    super();
    this.gotoLogin = this.gotoLogin.bind(this);
    this.gotoRegister = this.gotoRegister.bind(this);
  }

  gotoLogin = () => {
    this.props.history.push("/login");
  };

  gotoRegister = () => {
    this.props.history.push("/register");
  };

  render = () => {
    return (
      <Router>
        <ButtonArea>
          <Button onClick={this.gotoLogin}>登录</Button>
          <Button plain onClick={this.gotoRegister}>注册</Button>
        </ButtonArea>
      </Router>
    );
  };
}

export default withRouter(NoLogin)