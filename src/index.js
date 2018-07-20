import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './js/banner';
import NavBar from './js/navBar';
import 'weui';
import 'react-weui/build/packages/react-weui.css';

class App extends React.Component{
    render () {
        return (
            <div>
                <Banner />
                <NavBar />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);