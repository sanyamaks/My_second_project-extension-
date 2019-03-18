import React, { Component } from 'react';
import header_logo from '../../img/header_logo.ico';
import $ from 'jquery';

class Header extends Component {

    componentDidMount = () => {
        $('.logo-btn').click(function () {
            $('.menu').toggleClass('active');
        })
    }

    render() {
        return (
            <header className="header">
                <div className="logo-btn">
                    <img src={header_logo} alt="Логотип"></img>
                </div>
                <ul className="menu">
                    <li className="home" title="Главная"><a href="index.html">Главная</a></li>
                    <li className="Portfolio" title="Портфолио"><a href="#">Портфолио</a></li>
                    <li className="about" title="Обо мне"><a href="#">Обо мне</a></li>
                    <li className="Contact" title="Контакты"><a href="#">Контакты</a></li>
                </ul>
            </header>
        );
    }
}

export default Header;
// Для работы jquery -> npm install --save jquery?