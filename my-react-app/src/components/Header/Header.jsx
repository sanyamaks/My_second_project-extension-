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
        $('.About').click(function () {
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
                        <Link to='/My_second_project-extension-'>Главная</Link>
                    </li>
                    <li className="Portfolio" title="Портфолио">
                        <Link to='/My_second_project-extension-/Portfolio'>Портфолио</Link>
                    </li>

                    <li className="About" title="Обо мне">
                        <Link to='/My_second_project-extension-/About'>Обо мне</Link>
                    </li>
                    <li className="Contact" title="Контакты">
                        <Link to='/My_second_project-extension-/Contact'>Контакты</Link>
                    </li>
                </ul>

            </header>
        );
    }
}

// Для работы jquery -> npm install --save jquery?