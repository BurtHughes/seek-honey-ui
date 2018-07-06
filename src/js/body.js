import React from 'react';
import '../css/index.css';
import Button from './button';

class Body extends React.Component{
    render () {
        return (
            <div>
                <Button text="微信网页授权" href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxaf8ebc4b41979524&redirect_uri=http%3A%2F%2F6uwuep.natappfree.cc%2FauthSuccess&response_type=code&scope=snsapi_userinfo&state=yeah#wechat_redirect" />
            </div>
        );
    }
}

export default Body