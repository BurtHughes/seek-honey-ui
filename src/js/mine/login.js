import React from 'react';
import {
    CellsTitle,
    Form,
    FormCell,
    CellHeader,
    Label,
    CellBody,
    Input,
    ButtonArea,
    Button
} from 'react-weui';

export default class Login extends React.Component {
    render = () => {
        return (
            <div>
                <CellsTitle>登录</CellsTitle>
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>用户名</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" placeholder="请输入用户名" />
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>密码</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="text" placeholder="请输入密码" />
                        </CellBody>
                    </FormCell>
                </Form>

                <ButtonArea>
                    <Button onClick={e => { }}>确定 </Button>
                </ButtonArea>
            </div>
        );
    }
}