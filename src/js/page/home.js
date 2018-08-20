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
import fm1 from '../../img/fm1.jpg';
import 'whatwg-fetch';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    let productList = state.product.productList;
    return { productList };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        update: (list) => {
            dispatch(list);
        }
    };
}

// 首页内容
class Home extends React.Component {
    componentDidMount(){
        GET({path:''}).then((res)=>{

        });
    }

    cellList = () => {
        return this.props.productList.map((obj, index) => {
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
Home = connect(mapStateToProps,mapDispatchToProps)(Home)
export default Home