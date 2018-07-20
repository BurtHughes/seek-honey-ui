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
            </div>
        );
    }
}

export default Body;