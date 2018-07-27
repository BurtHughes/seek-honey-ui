import React from 'react';
import {
    Route,
    Switch,
    Link
} from 'react-router-dom';
// import {rowserHistory} from 'react-router';
import { browserHistory } from 'react-router';
import Info from './info';
import NoLogin from './no-login';
import Register from './register';
import Login from './login';

export default class Mine extends React.Component {

    state = {
        isLogin: false
    }

    constructor(){
        super();
        if (this.state.isLogin) {
            // window.location = '/info';
            browserHistory.push('/info');
        } else {
            // window.location = '/nologin';
            browserHistory.push('/nologin');
        }
    }

    render = () => {
        return (
            <div style={{ display: this.props.display }}>
                {/* <Link to="/nologin">未登录时</Link>
                <Link to="/login">去登录</Link>
                <Link to="/register">去注册</Link>
                <Link to="/info">登录后</Link> */}
                <Switch>
                    <Route path="/nologin" component={NoLogin} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/info" component={Info} />
                </Switch>
            </div>
        );
    }
}
