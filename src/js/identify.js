import React from 'react';

export default class Identify extends React.Component {
    render = () => {
        return (
            <div style={{ display: this.props.display }}>
                <h1>真伪鉴别</h1>
            </div>
        );
    }
}
