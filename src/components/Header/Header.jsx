import React, {Component} from 'react';
import header_logo from '../../img/header_logo.ico';
import $ from 'jquery';
import  Sidebar from './Sidebar/Sidebar'

class Header extends Component{

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

    render(){


        let SidebarElement = this.props.SidebarData.map ( el => {
            return <Sidebar
                nameTitleLink = {el.nameTitleLink}
            />
        })



        return (
            <header className="header">

                <div className="logo-btn">
                    <img src={header_logo} alt="Логотип"/>
                </div>

                <ul className="menu">
                    {SidebarElement}
                </ul>

            </header>
        );
    }
}

    export default Header;
// Для работы jquery -> npm install --save jquery?