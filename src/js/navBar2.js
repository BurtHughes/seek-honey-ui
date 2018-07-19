import React from 'react';

import {
    Tab,
    TabBody,
    TabBar,
    TabBarItem,
    TabBarIcon,
    TabBarLabel,
    Article,
    Page,
    CellsTitle,
    Cells,
    Cell,
    CellBody,
    CellFooter,
    CellHeader
} from 'react-weui';

import HomeBtn from '../img/home.png';
import ListBtn from '../img/list.png';
import MineBtn from '../img/mine.png';

export default class NavBar2 extends React.Component {
    state={
        tab:0
    };

    render() {
        return (
            <Tab>
                <TabBody>
                    <div style={{display: this.state.tab == 0 ? null : 'none'}}>
                        <CellsTitle>新鲜的蜂蜜</CellsTitle>
                        <Cells>
                            <Cell href="javascript:;" link>
                                <CellBody>蜜蜂1</CellBody>
                                <CellFooter/>
                            </Cell>
                            <Cell href="javascript:;" link>
                                <CellBody>蜜蜂1</CellBody>
                                <CellFooter/>
                            </Cell>
                        </Cells>
                    </div>
                    <div style={{display: this.state.tab == 1 ? null : 'none'}}>
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
                    <div style={{display: this.state.tab == 2 ? null : 'none'}}>
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
                        onClick={e=>this.setState({tab:0})}
                        icon={<img src={HomeBtn}/>}
                        label="Tab1"
                    />
                    <TabBarItem active={this.state.tab == 1} onClick={e=>this.setState({tab:1})}>
                        <TabBarIcon>
                            <img src={ListBtn}/>
                        </TabBarIcon>
                        <TabBarLabel>Tab2</TabBarLabel>
                    </TabBarItem>
                    <TabBarItem
                        active={this.state.tab == 2}
                        onClick={e=>this.setState({tab:2})}
                        icon={<img src={MineBtn}/>}
                        label="Tab3"
                    />
                </TabBar>
            </Tab>
        );
    }
};
