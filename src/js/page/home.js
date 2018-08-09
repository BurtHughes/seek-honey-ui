import React from 'react';
import {
    Cells,
    Cell,
    CellsTitle,
    CellHeader,
    CellBody,
    CellFooter,
    Toast
} from 'react-weui';
import { GET } from '../common/request';
import { TestUrl } from '../test-data/url-list';
import fm1 from '../../img/fm1.jpg';
import 'whatwg-fetch';

// 首页内容
export default class Home extends React.Component {
    state = {
        dataList: [],
        showLoading: true
    }

    constructor() {
        super();
        let success = res => {
            //console.log('成功:');
            //console.log(res);
            this.setState({ dataList: res.data, showLoading: false });
        };
        let fail = res => {
            console.log('失败:' + res);
            this.setState({ showLoading: false });
        };
        GET({ path: TestUrl.productList }).then(success, fail);
    }

    cellList = () => {
        return this.state.dataList.map((obj, index) => {
            return <Cell key={index} link>
                <CellHeader>
                    <img src={fm1} alt={obj.imgId} style={{ width: '100px' }} />
                </CellHeader>
                <CellBody>{obj.productName}</CellBody>
                <CellFooter />
            </Cell>;
        });
    }

    render = () => {
        return (
            <div style={{ display: this.props.display }}>
                <Toast icon="loading" show={this.state.showLoading}>Loading...</Toast>
                <CellsTitle>新鲜的蜂蜜</CellsTitle>
                <Cells>{this.cellList()}</Cells>
            </div>
        );
    }
}