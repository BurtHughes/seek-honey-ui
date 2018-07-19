import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './js/banner';
import Body from './js/body';
import MyFooter from './js/footer';
import NavBar from './js/navBar';
import NavBar2 from './js/navBar2';
import 'weui';
import 'react-weui/build/packages/react-weui.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>
                <Banner />
                {/* <Body /> */}
                {/* <MyFooter /> */}
                <NavBar2 />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);