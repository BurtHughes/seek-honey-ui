import React from "react";
import {
  Tab,
  TabBody,
  TabBar,
  TabBarItem,
  Article,
  Cells,
  Cell,
  CellBody,
  CellHeader,
  Popup,
  PopupHeader,
  Dialog
} from "react-weui";
import HomeBtn from "../img/home.png";
import ListBtn from "../img/list.png";
import MineBtn from "../img/mine.png";
import Home from "./home";
import MyPopup from "./myPopup";

export default class Content extends React.Component {
  state = {
    tab: 0,
    bottom_show: false,
    buttons: [
      {
        type: "default",
        label: "取消",
        onClick: this.hide.bind(this)
      },
      {
        type: "primary",
        label: "确定",
        onClick: this.hide.bind(this)
      }
    ]
  };

  constructor() {
    super();
    this.popup = this.popup.bind(this);
    this.hide = this.hide.bind(this);
    this.isVisible = this.isVisible.bind(this);
  }

  popup() {
    this.setState({ bottom_show: true });
  }

  hide() {
    this.setState({ bottom_show: false });
  }

  // 判断当前页面是否可见
  isVisible = index => ({ display: this.state.tab == index ? null : "none" });

  // 页面属性
  pageProp = index => ({
    ...this.isVisible(index),
    popup: this.popup
  });

  render() {
    let dialogProp = {
      type: "ios",
      title: "温馨提示",
      buttons: this.state.buttons,
      show: this.state.bottom_show
    };
    return (
      <Tab>
        {/* <MyPopup /> */}
        <Dialog {...dialogProp}>这是弹窗</Dialog>
        <TabBody>
          <Home {...this.pageProp(0)} />
          <div style={this.isVisible(1)}>
            <Article>
              <h1>资讯页面</h1>
              <section>
                <h2 className="title">展示一些蜂蜜相关的资讯</h2>
                <section>
                  <h3>什么样的蜂蜜才是好蜂蜜？</h3>
                  <p>
                    众所周知，蜂蜜吃了是非常有好处的，但是什么样的蜂蜜才是好蜂蜜呢？我们今天来一探究竟......
                  </p>
                </section>
              </section>
            </Article>
          </div>
          <div style={this.isVisible(2)}>
            <Cells>
              <Cell>
                <CellHeader>
                  <img />
                </CellHeader>
              </Cell>
            </Cells>
          </div>
        </TabBody>
        <TabBar>
          <TabBarItem
            active={this.state.tab == 0}
            onClick={e => this.setState({ tab: 0 })}
            icon={<img src={HomeBtn} />}
            label="首页"
          />
          <TabBarItem
            active={this.state.tab == 1}
            onClick={e => this.setState({ tab: 1 })}
            icon={<img src={ListBtn} />}
            label="资讯"
          />
          <TabBarItem
            active={this.state.tab == 2}
            onClick={e => this.setState({ tab: 2 })}
            icon={<img src={MineBtn} />}
            label="我的"
          />
        </TabBar>
      </Tab>
    );
  }
}
