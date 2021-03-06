import React from "react"
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
} from "react-weui"
import { withRouter } from "react-router-dom"
import { POST } from "../../common/request"
import { connect } from 'react-redux'
import { login } from '../../model/actions'
import { toast } from '../../common/toast'
import { jump } from '../../common/jump'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setLogin: obj => {
      obj['isLogin'] = true;
      localStorage.setItem("userInfo", JSON.stringify(obj));
      dispatch(login(obj));
    },
    ...toast(dispatch),
    jump: (path) => {
      jump(ownProps.history, dispatch, 'tab4', path);
    }
  }
}

class Login extends React.Component {
  constructor() {
    super();
    this.logedIn = this.logedIn.bind(this);
    this.back = this.back.bind(this);
  }

  logedIn = () => {
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
      param
    })
      .then(res => {
        if (res.code === 0) {
          this.props.showToast('success', '登录成功', 1000, ()=>{
            this.props.setLogin(res.data);
            this.props.jump("/mine/info");
          });
        }
      });
  };

  back = () => {
    this.props.jump("/mine/index");
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
Login = connect(null, mapDispatchToProps)(Login)
export default withRouter(Login)