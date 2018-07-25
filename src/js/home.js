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
import { GET } from './common/request';
import { TestUrl } from './test-data/url-list';
import fm1 from '../img/fm1.jpg';
import 'whatwg-fetch';

// 首页内容
export default class Home extends React.Component {
    state = {
        dataList: [],
        showLoading: true
    }

    constructor() {
        super();
        fetch(TestUrl.productList, { method: 'get' })
            .then(res => res.json())
            .then(res => {
                setTimeout(() => {
                    this.setState({ dataList: res.data, showLoading: false });
                }, 2000);
            })
            .catch(err => {
                console.log('fetch出错:' + err);
            });
    }

    cellList = (list, props) => {
        let result;
        for (let i in list) {
            let cur = list[i];
            result += <Cell href="javascript:;" onClick={props.popup} link>
                <CellHeader>
                    <img src={fm1} alt="" style={{ width: '100px' }} />
                </CellHeader>
                <CellBody>蜜蜂1</CellBody>
                <CellFooter />
            </Cell>;
        }
        return result;
    }

    render = () => {
        return (
            <div style={{ display: this.props.display }}>
                <Toast icon="loading" show={this.state.showLoading}>Loading...</Toast>
                <CellsTitle>新鲜的蜂蜜</CellsTitle>
                <Cells>
                    {
                        this.state.dataList.map(obj => {
                            return <Cell href="javascript:;" onClick={this.props.popup} link>
                                <CellHeader>
                                    <img src={fm1} alt={obj.imgId} style={{ width: '100px' }} />
                                </CellHeader>
                                <CellBody>obj.productName</CellBody>
                                <CellFooter />
                            </Cell>;
                        })
                    }
                </Cells>
            </div>
        );
    }
}