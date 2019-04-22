import React, { Component } from 'react';
import './Home.css';
import homePageImage from './image/hand.png';

export default class Home extends Component {
    render() {
        return (<div>
            <h1>欢迎来到我的网站</h1>                    
            <p className = "text--red">这是一个首页</p>
            <div className = "imageContainer">
                <img className = "imageContainer__homePageImage" src = {homePageImage} alt=""/>
            </div>
        </div>)
    }
}