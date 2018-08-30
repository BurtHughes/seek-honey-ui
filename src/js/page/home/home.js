import React from "react";
import {
    Route,
    Switch,
    BrowserRouter as Router,
    Redirect,
    withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import Index from './index';
import Buy from './buy';

const mapStateToProps = (state, owmProps) => {
    let isLogin =
        state.auth.isLogin || JSON.parse(localStorage.getItem("userInfo"));
    let isShow = (state.tab.currentTab === 1) ? null : 'none';
    return { isLogin, isShow };
};

class Home extends React.Component {
    render = () => {
        let { isShow, isLogin } = this.props;
        let redirect = () => {
            return (
                <Redirect to="/home/index" />
            )
        };
        return (
            <Router>
                <div style={{ display: isShow }}>
                    <Switch>
                        <Route path="/home" exact render={redirect} />
                        <Route path="/home/index" component={Index} />
                        <Route path="/home/buy" component={Buy} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
Home = connect(mapStateToProps)(Home);
export default withRouter(Home);