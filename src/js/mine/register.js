import React from "react";
import {
  CellsTitle,
  Form,
  FormCell,
  CellHeader,
  Label,
  CellBody,
  Input,
  Button,
  ButtonArea,
  Dialog,
  Toast,
  Toptips
} from "react-weui";
import { TestUrl } from "../test-data/url-list";
import { POST } from "../common/request";
import { withRouter } from "react-router-dom";

class Register extends React.Component {
  constructor() {
    super();
    this.register = this.register.bind(this);
    this.showDialog = this.showDialog.bind(this);
    this.gotoLogin = this.gotoLogin.bind(this);
    this.gotoNologin = this.gotoNologin.bind(this);
  }

  state = {
    dialogShow: false,
    dialogMsg: '',
    showToptips: false,
    toptips: '',
    warnTimer: null,
    nextAction: () => { }
  };

  register = () => {
    // POST({ path: TestUrl.register }).then(res => {
    //校验表单
    let name = document.getElementById("name").value;
    let pwd = document.getElementById("pwd").value;
    if (name === '') {
      this.showToptips('用户名不能为空！');
      return;
    }
    if (pwd === '') {
      this.showToptips('密码不能为空！');
      return;
    }
    let param = {
      name: document.getElementById("name").value,
      password: document.getElementById("pwd").value
    };
    POST({
      path: 'register',
      param: param,
      toast: this.props.toast
    })
      .then(res => {
        if (res.code === 0) {
          this.setState({ nextAction: this.gotoLogin });
          this.showDialog('注册成功');
        } else {
          this.setState({ nextAction: this.hideDialog });
          this.showDialog(res.msg);
        }
      });
  };

  showToptips = (msg) => {
    this.setState({
      showToptips: true,
      toptips: msg
    });
    this.state.warnTimer = setTimeout(() => {
      this.setState({
        showToptips: false
      });
    }, 1500);
  }

  showDialog = msg => {
    this.setState({ dialogMsg: msg, dialogShow: true });
  };

  hideDialog = () => {
    this.setState({ dialogShow: false });
  }

  gotoLogin = () => {
    this.setState({ dialogShow: false });
    this.props.history.push("/login");
  };

  gotoNologin = () => {
    this.props.history.push("/nologin");
  };

  render = () => {
    let dialogProp = {
      type: "ios",
      title: "温馨提示",
      buttons: [{
        type: "primary",
        label: "确定",
        onClick: this.state.nextAction
      }],
      show: this.state.dialogShow
    };
    return (
      <div>
        <Dialog {...dialogProp}>{this.state.dialogMsg}</Dialog>
        <Toptips type="warn" show={this.state.showToptips}>
          {this.state.toptips}
        </Toptips>
        <CellsTitle>注册</CellsTitle>
        <Form>
          <FormCell>
            <CellHeader>
              <Label>用户名</Label>
            </CellHeader>
            <CellBody>
              <Input type="text" id="name" placeholder="请输入用户名" />
            </CellBody>
          </FormCell>
          <FormCell>
            <CellHeader>
              <Label>密码</Label>
            </CellHeader>
            <CellBody>
              <Input type="text" id="pwd" placeholder="请输入密码" />
            </CellBody>
          </FormCell>
        </Form>

        <ButtonArea>
          <Button onClick={this.register}>确定</Button>
          <Button plain onClick={this.gotoNologin}>返回</Button>
        </ButtonArea>
      </div>
    );
  };
}

export default withRouter(Register);