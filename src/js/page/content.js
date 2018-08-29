import React from "react";
import HomeBtn from "../../img/home.png";
import ListBtn from "../../img/list.png";
import MineBtn from "../../img/mine.png";
import Home from "./home/home";
import News from "./news";
import Mine from "./mine/mine";
import Identify from "./identify";
import { connect } from "react-redux";
import { switch_tab } from '../model/actions';
import { withRouter } from "react-router-dom";
import { Tab, TabBody, TabBar, TabBarItem, Toast } from "react-weui";

const mapStateToProps = (state, ownProps) => {
  let { show, text, icon } = state.toast.toast;
  let currentTab = state.tab.currentTab || localStorage.getItem("currentTab");
  return { toastShow: show, toastText: text, toastIcon: icon, currentTab };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    switchTab: (index) => {
      localStorage.setItem('currentTab', index);
      dispatch(switch_tab(index));
      ownProps.history.push(getPathByTab(index));
    }
  };
};

const getPathByTab = (tab) => {
  let indexPath = {
    tab1: '/home/index',
    tab2: '/news/index',
    tab3: '/identify/index',
    tab4: '/mine/index'
  };
  let currentPath = JSON.parse(localStorage.getItem("currentPath"));
  currentPath = Object.assign({}, indexPath, currentPath);
  return currentPath['tab' + tab];
}

class Content extends React.Component {
  constructor() {
    super();
    this.pageProp = this.pageProp.bind(this);
  }

  componentWillMount() {
    let tab = JSON.parse(localStorage.getItem("currentTab")) || 1;
    this.props.switchTab(tab);
  }

  pageProp = index => {
    return {
      display: (this.props.currentTab === index) ? null : "none"
    };
  };

  render() {
    let { toastShow, toastIcon, toastText, currentTab, switchTab } = this.props;
    return (
      <Tab>
        <Toast show={toastShow} icon={toastIcon}>{toastText}</Toast>
        <TabBody>
          <Home {...this.pageProp(1)} />
          <News {...this.pageProp(2)} />
          <Identify {...this.pageProp(3)} />
          <Mine {...this.pageProp(4)} />
        </TabBody>
        <TabBar>
          <TabBarItem
            active={currentTab === 1}
            onClick={e => switchTab(1)}
            icon={<img src={HomeBtn} alt="" />}
            label="首页"
          />
          <TabBarItem
            active={currentTab === 2}
            onClick={e => switchTab(2)}
            icon={<img src={ListBtn} alt="" />}
            label="资讯"
          />
          <TabBarItem
            active={currentTab === 3}
            onClick={e => switchTab(3)}
            icon={<img src={MineBtn} alt="" />}
            label="鉴别"
          />
          <TabBarItem
            active={currentTab === 4}
            onClick={e => switchTab(4)}
            icon={<img src={HomeBtn} alt="" />}
            label="我的"
          />
        </TabBar>
      </Tab>
    );
  }
}
Content = connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
export default withRouter(Content);
