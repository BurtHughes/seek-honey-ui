import React from 'react';
import 'whatwg-fetch';
import {Button} from 'react-weui';

const baseUrl = 'http://127.0.0.1/';
const req = () => {
    fetch(baseUrl+'user/1',{
        method: 'get'
    }).then(response=>response.json())
    .then(res=>console.log(res))
    .catch((err)=>{
        console.log('fetch出错:'+err);
    });
};

class Body extends React.Component{
    render () {
        return (
            <div>
                {/* <Button text="微信网页授权" href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxaf8ebc4b41979524&redirect_uri=http%3A%2F%2Ffv94wu.natappfree.cc%2FauthCallBack&response_type=code&scope=snsapi_userinfo&state=yeah#wechat_redirect" /> */}
                {/* <button onClick={req}>测试fetch</button> */}
                {/* <Button>测试fetch</Button> */}
            </div>
        );
    }
}

export default Body;