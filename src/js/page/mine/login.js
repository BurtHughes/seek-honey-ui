import React from "react";
import {
  CellsTitle,
  Form,
  FormCell,
  CellHeader,
  Label,
  CellBody,
  Input,
  ButtonArea,
  Button
} from "react-weui";
import { withRouter } from "react-router-dom";
import { POST } from "../../common/request";
import { Sys } from "../../common/constant";

class Login extends React.Component {
  constructor() {
    super();
    this.logedIn = this.logedIn.bind(this);
    this.back = this.back.bind(this);
  }

  logedIn = () => {
    // POST({ path: TestUrl.login }).then(res => {
    //   if (res.code === 0) {
    //     this.props.logedIn();
    //     this.props.history.push("/info");
    //   } else {
    //     alert('登录失败');
    //   }
    // });
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
      path: 'login',
      param: param,
      toast: this.props.toast
    })
      .then(res => {
        if (res.code === 0) {
          this.props.toast('登录成功', 1500, Sys.ICON_SUCC_S);
          setTimeout(()=>{
            this.props.logedIn();
            this.props.history.push("/info");
          },1500);
        } else {
          this.props.toast(res.msg, 1500, Sys.ICON_WARN_S);
        }
      });
  };

  back = () => {
    this.props.history.push("/nologin");
  }

  render = () => {
    return (
      <div>
        <CellsTitle>登录</CellsTitle>
        <Form>
          <FormCell>
            <CellHeader>
              <Label>用户名</Label>
            </CellHeader>
            <CellBody>
              <Input id='name' type="text" placeholder="请输入用户名" />
            </CellBody>
          </FormCell>
          <FormCell>
            <CellHeader>
              <Label>密码</Label>
            </CellHeader>
            <CellBody>
              <Input id='pwd' type="text" placeholder="请输入密码" />
            </CellBody>
          </FormCell>
        </Form>

        <ButtonArea>
          <Button onClick={this.logedIn}>确定 </Button>
          <Button plain onClick={this.back}>返回 </Button>
        </ButtonArea>
      </div>
    );
  };
}
export default withRouter(Login);
