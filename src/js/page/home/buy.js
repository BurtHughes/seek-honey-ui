import React from 'react';
import {
    Cells,
    Cell,
    CellsTitle,
    CellHeader,
    CellBody,
    CellFooter,
    Badge,
    Button
} from 'react-weui';
import 'whatwg-fetch';
import { GET } from '../../common/request';
import { connect } from 'react-redux';
import { update_product } from '../../model/actions';
import { jump } from '../../common/jump';

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
        jump: () => {
            jump(ownProps.history, dispatch, 'tab1', '/home/index');
        }
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
                <h3>购买页面</h3>
                <Button onClick={e=>this.props.jump()}>返回首页</Button>
            </div>
        );
    }
}
Buy = connect(mapStateToProps, mapDispatchToProps)(Buy)
export default Buy