import React from 'react';
import {
    Cells,
    Cell,
    CellsTitle,
    CellHeader,
    CellBody,
    CellFooter,
    Badge
} from 'react-weui';
import 'whatwg-fetch';
import { GET } from '../../common/request';
import { connect } from 'react-redux';
import { update_product } from '../../model/actions';

const mapStateToProps = (state, ownProps) => {
    // let prd = state.product || [];
    // let productList = prd.productList || [];
    // return { productList };
    return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        // update: (list) => {
        //     dispatch(update_product(list));
        // }
    };
}

// 购买页面
class Buy extends React.Component {
    componentDidMount() {
        // GET({ path: 'product' }).then((res) => {
        //     if (res.code === 0) {
        //         this.props.update(res.data.list);
        //     }
        // });
    }

    render = () => {
        return (
            <div>
                购买页面
            </div>
        );
    }
}
Buy = connect(mapStateToProps, mapDispatchToProps)(Buy)
export default Buy