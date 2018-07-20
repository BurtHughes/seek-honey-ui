import React from 'react';
import {
    Tab,
    TabBody,
    TabBar,
    TabBarItem,
    Article,
    Cells,
    Cell,
    CellBody,
    CellHeader,
    Popup,
    PopupHeader,
    Dialog
} from 'react-weui';
import HomeBtn from '../img/home.png';
import ListBtn from '../img/list.png';
import MineBtn from '../img/mine.png';
import Home from './home';


export default class NavBar extends React.Component {
    state = {
        tab: 0,
        bottom_show: false,
        buttons: [
            {
                type: 'default',
                label: '取消',
                onClick: this.hide.bind(this)
            },
            {
                type: 'primary',
                label: '确定',
                onClick: this.hide.bind(this)
            }
        ]
    };

    constructor() {
        super();
        this.popup = this.popup.bind(this);
        this.hide = this.hide.bind(this);
        this.isVisible = this.isVisible.bind(this);
    }

    popup() {
        this.setState({ bottom_show: true });
    }

    hide() {
        this.setState({ bottom_show: false });
    }

    // 判断当前页面是否可见
    isVisible = index => ({display: this.state.tab == index ? null : 'none'});

    render() {
        return (
            <Tab>
                <Popup
                    show={false}
                    onRequestClose={e => this.setState({ bottom_show: false })}
                    enableMask
                >
                    <PopupHeader
                        left="Cancel"
                        right="Ok"
                        leftOnClick={e => this.setState({ bottom_show: false })}
                        rightOnClick={e => this.setState({ bottom_show: false })}
                    />
                    <div style={{ height: '100vh', overflow: 'scroll' }}>
                        <Cells>
                            <Cell onClick={this.hide}>
                                <CellBody>选项1</CellBody>
                            </Cell>
                            <Cell>
                                <CellBody>选项2</CellBody>
                            </Cell>
                        </Cells>
                    </div>
                </Popup>
                <Dialog type="ios" title="温馨提示" buttons={this.state.buttons} show={this.state.bottom_show}>这是弹窗</Dialog>
                <TabBody>
                    <Home props={this.isVisible(0)}/>
                    <div style={{ display: this.state.tab == 1 ? null : 'none' }}>
                        <Article>
                            <h1>资讯页面</h1>
                            <section>
                                <h2 className="title">展示一些蜂蜜相关的资讯</h2>
                                <section>
                                    <h3>什么样的蜂蜜才是好蜂蜜？</h3>
                                    <p>众所周知，蜂蜜吃了是非常有好处的，但是什么样的蜂蜜才是好蜂蜜呢？我们今天来一探究竟......</p>
                                </section>
                            </section>
                        </Article>
                    </div>
                    <div style={{ display: this.state.tab == 2 ? null : 'none' }}>
                        <Cells>
                            <Cell>
                                <CellHeader>
                                    <img />
                                </CellHeader>
                            </Cell>
                        </Cells>
                    </div>
                </TabBody>
                <TabBar>
                    <TabBarItem
                        active={this.state.tab == 0}
                        onClick={e => this.setState({ tab: 0 })}
                        icon={<img src={HomeBtn} />}
                        label="首页"
                    />
                    <TabBarItem
                        active={this.state.tab == 1}
                        onClick={e => this.setState({ tab: 1 })}>
                        icon={<img src={ListBtn} />}
                        label="资讯"
                    </TabBarItem>
                    <TabBarItem
                        active={this.state.tab == 2}
                        onClick={e => this.setState({ tab: 2 })}
                        icon={<img src={MineBtn} />}
                        label="我的"
                    />
                </TabBar>
            </Tab>
        );
    }
};
