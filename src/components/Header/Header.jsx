import React, {Component} from 'react';
import header_logo from '../../img/header_logo.ico';
import $ from 'jquery';
import {Link} from 'react-router-dom'

export default class Header extends Component {

    componentDidMount = () => {
        $('.logo-btn').click(function () {
            $('.menu').toggleClass('active');
        })

        $('.Portfolio').click(function () {
            $('.menu').toggleClass('active');

        })

        $('.home').click(function () {
            $('.menu').toggleClass('active');

        })
        $('.about').click(function () {
            $('.menu').toggleClass('active');

        })
        $('.Contact').click(function () {
            $('.menu').toggleClass('active');

        })
    }

    render() {
        return (
            <header className="header">

                <div className="logo-btn">
                    <img src={header_logo} alt="Логотип"/>
                </div>

                <ul className="menu">
                    <li className="home" title="Главная">
                        <Link to='/'>Главная</Link>
                    </li>
                    <li className="Portfolio" title="Портфолио">
                        <Link to='/Portfolio'>Портфолио</Link>
                    </li>

                    <li className="about" title="Обо мне"><a href="#">Обо мне</a></li>
                    <li className="Contact" title="Контакты"><a href="#">Контакты</a></li>
                </ul>

            </header>
        );
    }
}

// Для работы jquery -> npm install --save jquery?