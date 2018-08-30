import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, owmProps) => {
    let isLogin =
      state.auth.isLogin || JSON.parse(localStorage.getItem("userInfo"));
    let isShow = (state.tab.currentTab === 3) ? null : 'none';
    return { isLogin, isShow };
  };  

class Identify extends React.Component {
    render = () => {
        let { isShow, isLogin } = this.props;
        return (
            <div style={{ display: isShow }}>
                <h1>真伪鉴别</h1>
            </div>
        );
    }
}
export default connect(mapStateToProps)(Identify)