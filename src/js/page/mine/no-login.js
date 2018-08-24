import React from "react";
import { ButtonArea, Button } from "react-weui";
import { withRouter, BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';
import { jump } from '../../common/jump';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    jump: (path) => {
      jump(ownProps.history, dispatch, 'tab4', path);
    }
  }
}

class NoLogin extends React.Component {
  constructor() {
    super();
    this.gotoLogin = this.gotoLogin.bind(this);
    this.gotoRegister = this.gotoRegister.bind(this);
  }

  gotoLogin = () => {
    this.props.jump("/mine/login");
  };

  gotoRegister = () => {
    this.props.jump("/mine/register");
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
NoLogin = connect(null, mapDispatchToProps)(NoLogin)
export default withRouter(NoLogin)