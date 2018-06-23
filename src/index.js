import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: props.name};
    }

    render () {
        return (
            <h1>Hello, {this.state.name}!</h1>
        );
    }
}

ReactDOM.render(
    <Test name='Tom'/>,
    document.getElementById('root')
);