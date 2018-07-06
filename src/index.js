import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './js/banner';
import Body from './js/body';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>
                <Banner />
                <Body />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);