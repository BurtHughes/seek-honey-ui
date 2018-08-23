import React from "react";
import { Tab, TabBody, TabBar, TabBarItem, Toast } from "react-weui";
import HomeBtn from "../../img/home.png";
import ListBtn from "../../img/list.png";
import MineBtn from "../../img/mine.png";
import Home from "./home/home";
import News from "./news";
import Identify from "./identify";
import Mine from "./mine/mine";
import {
  loading_toast,
  success_toast,
  error_toast,
  hide_toast
} from "../model/actions";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  let { show, text, icon } = state.toast.toast;
  return { toastShow: show, toastText: text, toastIcon: icon };
};

class Content extends React.Component {
  state = {
    tab: 0,
    isLogIn: false,
    toastIcon: null
  };

  constructor() {
    super();
    this.pageProp = this.pageProp.bind(this);
  }

  pageProp = index => {
    return {
      display: this.state.tab === index ? null : "none"
    };
  };

  render() {
    return (
      <Tab>
        <Toast show={this.props.toastShow} icon={this.props.toastIcon}>
          {this.props.toastText}
        </Toast>
        <TabBody>
          <Home {...this.pageProp(0)} />
          <News {...this.pageProp(1)} />
          <Identify {...this.pageProp(2)} />
          <Mine {...this.pageProp(3)} />
        </TabBody>
        <TabBar>
          <TabBarItem
            active={this.state.tab === 0}
            onClick={e => this.setState({ tab: 0 })}
            icon={<img src={HomeBtn} alt="" />}
            label="首页"
          />
          <TabBarItem
            active={this.state.tab === 1}
            onClick={e => this.setState({ tab: 1 })}
            icon={<img src={ListBtn} alt="" />}
            label="资讯"
          />
          <TabBarItem
            active={this.state.tab === 2}
            onClick={e => this.setState({ tab: 2 })}
            icon={<img src={MineBtn} alt="" />}
            label="鉴别"
          />
          <TabBarItem
            active={this.state.tab === 3}
            onClick={e => this.setState({ tab: 3 })}
            icon={<img src={HomeBtn} alt="" />}
            label="我的"
          />
        </TabBar>
      </Tab>
    );
  }
}
Content = connect(
  mapStateToProps
)(Content);
export default Content;
