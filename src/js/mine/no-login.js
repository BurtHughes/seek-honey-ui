import React from 'react';
import {
    ButtonArea,
    Button
} from 'react-weui';

export default class NoLogin extends React.Component {
    render = () => {
        return (
            <ButtonArea>
                <Button>登录</Button>
                <Button plain>注册</Button>
            </ButtonArea>
        );
    }
}