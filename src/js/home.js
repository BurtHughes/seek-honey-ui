import React from 'react';
import {
    Cells,
    Cell,
    CellsTitle,
    CellHeader,
    CellBody,
    CellFooter
} from 'react-weui';
import fm1 from '../img/fm1.jpg';
import fm2 from '../img/fm2.jpg';

// 首页内容
export default class Home extends React.Component {
    render = () => {
        return (
            <div style={{display: this.props.display}}>
                <CellsTitle>新鲜的蜂蜜</CellsTitle>
                <Cells>
                    <Cell href="javascript:;" onClick={this.popup} link>
                        <CellHeader>
                            <img src={fm1} alt="" style={{ width: '100px' }} />
                        </CellHeader>
                        <CellBody>蜜蜂1</CellBody>
                        <CellFooter />
                    </Cell>
                    <Cell href="javascript:;" onClick={this.popup} link>
                        <CellHeader>
                            <img src={fm2} alt="" style={{ width: '100px' }} />
                        </CellHeader>
                        <CellBody>蜜蜂2</CellBody>
                        <CellFooter />
                    </Cell>
                </Cells>
            </div>
        );
    }
}