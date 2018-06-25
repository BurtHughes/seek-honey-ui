import React from 'react';
import '../css/index.css';
import bannerIcon from '../img/icon.png';

class Banner extends React.Component{
    render () {
        return (
            <div className="banner">
                <img src={bannerIcon} alt=""/>
                <span >觅蜜</span>
            </div>
        );
    }
}

export default Banner