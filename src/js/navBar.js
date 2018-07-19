import React from 'react';
import { 
    Tab,
    TabBarItem,
    Page,
    Cells,
    Cell,
    CellsTitle,
    CellHeader,
    CellFooter,
    CellBody,
    CellsTips
} from 'react-weui';
import HomeBtn from '../img/home.png';
import ListBtn from '../img/list.png';
import MineBtn from '../img/mine.png';

class NavBar extends React.Component{
    state = {
        tab: 0
    };

    render = () => {
        return (
            <div class="">
            <Tab type="tabbar">
                <TabBarItem icon={<img src={HomeBtn}/>} label="Tab1">
                    <Page className="cell" title="首页" subTitle="展示商品">
                        <CellsTitle>新鲜的蜂蜜</CellsTitle>
                        <Cells>
                            <Cell href="javascript:;">
                                <CellBody>蜜蜂1</CellBody>
                                <CellFooter/>
                            </Cell>
                        </Cells>
                    </Page>
                </TabBarItem>
                <TabBarItem icon={<img src={ListBtn}/>} label="Tab2">
                    // 文章页面
                </TabBarItem>
                <TabBarItem icon={<img src={MineBtn}/>} label="Tab3">
                    // 我的页面
                </TabBarItem>
            </Tab>
            </div>
        );
    }
}

export default NavBar