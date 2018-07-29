import React from "react";
import { ButtonArea, Button } from "react-weui";
import { withRouter, Link, BrowserRouter as Router } from "react-router-dom";

class NoLogin extends React.Component {
  constructor() {
    super();
    this.goto = this.goto.bind(this);
  }

  goto = () => {
    this.props.history.push("/login");
  };

  render = () => {
    return (
      <Router>
        <ButtonArea>
          <Button onClick={this.goto}>登录</Button>
          <Button plain>注册</Button>
        </ButtonArea>
      </Router>
    );
  };
}

export default withRouter(NoLogin)