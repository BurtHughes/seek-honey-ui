import React from 'react';
import {
    Cells,
    Cell,
    CellsTitle,
    CellHeader,
    CellBody,
    CellFooter
} from 'react-weui';
import { GET } from '../common/request';
import fm1 from '../../img/fm1.jpg';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import { update_product } from '../model/actions';

const mapStateToProps = (state, ownProps) => {
    let prd = state.product || [];
    let productList = prd.productList || [];
    return { productList };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        update: (list) => {
            dispatch(update_product(list));
        }
    };
}

// 首页内容
class Home extends React.Component {
    componentDidMount() {
        GET({ path: 'product' }).then((res) => {
            if (res.code === 0) {
                this.props.update(res.data.list);
            }
        });
    }

    cellList = () => {
        return this.props.productList.map((obj, index) => {
            return <Cell key={index} link>
                <CellHeader>
                    <img src={fm1} alt={obj.name} style={{ width: '100px' }} />
                </CellHeader>
                <CellBody>{obj.name}</CellBody>
                <CellFooter />
            </Cell>;
        });
    }

    render = () => {
        return (
            <div style={{ display: this.props.display }}>
                <CellsTitle>新鲜的蜂蜜</CellsTitle>
                <Cells>{this.cellList()}</Cells>
            </div>
        );
    }
}
Home = connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home