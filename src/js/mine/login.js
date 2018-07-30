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
import { POST } from "../common/request";
import { TestUrl } from "../test-data/url-list";

class Login extends React.Component {
  constructor() {
    super();
    this.logedIn = this.logedIn.bind(this);
  }

  logedIn = () => {
    POST({ path: TestUrl.login }).then(res => {
      if (res.code === 0) {
        this.props.logedIn();
        this.props.history.push("/info");
      } else {
        alert('登录失败');
      }
    });
  };

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
          <Button onClick={this.logedIn}>确定 </Button>
        </ButtonArea>
      </div>
    );
  };
}
export default withRouter(Login);
