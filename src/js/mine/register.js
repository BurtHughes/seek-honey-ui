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
  Dialog
} from "react-weui";
import { TestUrl } from "../test-data/url-list";
import { POST } from "../common/request";
import { withRouter } from "react-router-dom";

class Register extends React.Component {
  constructor() {
    super();
    this.register = this.register.bind(this);
    this.showDialog = this.showDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
    this.gotoNologin = this.gotoNologin.bind(this);
  }

  state = {
    dialogShow: false,
    dialogMsg: ""
  };

  register = () => {
    POST({ path: TestUrl.register }).then(res => {
      if (res.code === 0) {
        this.showDialog(res.msg);
      } else {
        this.showDialog(res.msg);
      }
    });
  };

  showDialog = msg => {
    this.setState({ dialogMsg: msg, dialogShow: true });
  };

  hideDialog = () => {
    this.setState({ dialogShow: false });
  };

  gotoNologin = () => {
    this.props.history.push("/nologin");
  };

  render = () => {
    let buttons = [
      {
        type: "default",
        label: "取消",
        onClick: this.hideDialog
      },
      {
        type: "primary",
        label: "确定",
        onClick: this.hideDialog
      }
    ];

    let dialogProp = {
      type: "ios",
      title: "温馨提示",
      buttons: buttons,
      show: this.state.dialogShow
    };
    return (
      <div>
        <Dialog {...dialogProp}>{this.state.dialogMsg}</Dialog>
        <CellsTitle>注册</CellsTitle>
        <Form>
          <FormCell>
            <CellHeader>
              <Label>用户名</Label>
            </CellHeader>
            <CellBody>
              <Input type="text" placeholder="请输入用户名" />
            </CellBody>
          </FormCell>
          <FormCell>
            <CellHeader>
              <Label>密码</Label>
            </CellHeader>
            <CellBody>
              <Input type="text" placeholder="请输入密码" />
            </CellBody>
          </FormCell>
        </Form>

        <ButtonArea>
          <Button onClick={this.register}>确定</Button>
          <Button plain onClick={this.gotoNologin}>放弃</Button>
        </ButtonArea>
      </div>
    );
  };
}

export default withRouter(Register);