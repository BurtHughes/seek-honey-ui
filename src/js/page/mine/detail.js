import React from "react";
import { withRouter } from "react-router-dom";
import {
  Cell,
  Cells,
  CellHeader,
  CellBody,
  CellFooter,
  Button,
  ButtonArea,
  ActionSheet,
  Dialog,
  Form,
  FormCell,
  Label,
  Input
} from "react-weui";
import { connect } from "react-redux";

const appMsgIcon = (
  <img
    width="64"
    height="64"
    alt=""
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg=="
  />
);

const mapStateToProps = (state, ownProps) => {
  let info =
    state.auth.userInfo || JSON.parse(localStorage.getItem("userInfo"));
  return { info };
};

class UserDetail extends React.Component {
  state = {
    isShow: false,
    prop: '',
    menus: [{
      label: '选项1',
      onClick: () => {}
    },{
      label: '选项2',
      onClick: () => {}
    }],
    actions: [{
      label: '取消',
      onClick: this.hide
    }],
    title: '',
    buttons: [
      {
        type: 'default',
        label: '取消',
        onClick: ()=>this.hide()
      },
      {
        type: 'primary',
        label: '确定',
        onClick: ()=>this.hide()
      }
    ]
  }
  constructor() {
    super();
    this.back = this.back.bind(this);
    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
  }
  show = (prop) => {this.setState({isShow: true, prop})}
  hide = () => {this.setState({isShow: false})}
  back = () => this.props.history.push("/info")
  render() {
    let { name, sex, country, province, city } = this.props.info;
    let map = {
      'name': '用户名'
    };
    let propValue = this.props.info[this.state.prop];
    let propText = map[this.state.prop];
    return (
      <div>
        {/* <ActionSheet
          type="ios"
          menus={this.state.menus}
          actions={this.state.actions}
          show={this.state.isShow}
          onRequestClose={e=>this.setState({isShow: false})}
        /> */}
        <Dialog type="ios" 
                // title={this.state.title}
                buttons={this.state.buttons}
                show={this.state.isShow}
        >
          <label htmlFor="update_input">{propText}</label>
          <Input id="update_input" className="text-center" type="text" defaultValue={propValue} placeholder={"输入"+propText}/>
        </Dialog>
        <Cells>
          <Cell href="javascript:;" access>
            <CellBody>头像</CellBody>
            <CellFooter>{appMsgIcon}</CellFooter>
          </Cell>
          <Cell onClick={()=>this.show('用户名')} href="javascript:;" access>
            <CellBody>用户名</CellBody>
            <CellFooter>{name}</CellFooter>
          </Cell>
          <Cell onClick={()=>this.show('性别')} href="javascript:;" access>
            <CellBody>性别</CellBody>
            <CellFooter>{sex}</CellFooter>
          </Cell>
          <Cell href="javascript:;" access>
            <CellBody>国籍</CellBody>
            <CellFooter>{country}</CellFooter>
          </Cell>
          <Cell href="javascript:;" access>
            <CellBody>省份</CellBody>
            <CellFooter>{province}</CellFooter>
          </Cell>
          <Cell href="javascript:;" access>
            <CellBody>城市</CellBody>
            <CellFooter>{city}</CellFooter>
          </Cell>
        </Cells>

        <ButtonArea>
          <Button plain onClick={this.back}>
            返回
          </Button>
        </ButtonArea>
      </div>
    );
  }
}
UserDetail = connect(mapStateToProps)(UserDetail);
export default withRouter(UserDetail);
