import React from 'react';
import '../css/index.css';

class Button extends React.Component{
    render () {
        return (
            <a href={this.props.href}>
                {this.props.text}
            </a>
        );
    }
}

export default Button