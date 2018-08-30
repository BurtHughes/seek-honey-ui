import React from "react";
import {Article} from 'react-weui';
import { connect } from 'react-redux';

const mapStateToProps = (state, owmProps) => {
  let isLogin =
    state.auth.isLogin || JSON.parse(localStorage.getItem("userInfo"));
  let isShow = (state.tab.currentTab === 2) ? null : 'none';
  return { isLogin, isShow };
};  

class News extends React.Component {
  render = () => {
    let { isShow, isLogin } = this.props;
    return (
      <div style={{ display: isShow }}>
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
    );
  };
}
export default connect(mapStateToProps)(News)