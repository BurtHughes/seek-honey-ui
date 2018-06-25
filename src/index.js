import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './js/banner';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render () {
        return (
            <div>
                <Banner />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);