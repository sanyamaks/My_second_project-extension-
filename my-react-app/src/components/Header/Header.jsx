import React from 'react';
import header_logo from '../../img/header_logo.ico';
import {Link} from 'react-router-dom'

export default class Header
    extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
        this.setActive = this.setActive.bind(this);
    }

    setActive = function (isActive) {
        this.setState({
            isActive: isActive
        })
    };


    render() {
        const isActive = this.state.isActive;
        return (

            <header className="header">

                <div className="logo-btn" onClick={() => this.setActive(!isActive)}>
                    <img src={header_logo} alt="Логотип"/>
                </div>

                <ul className={`menu ${isActive ? "active" : ""}`}>
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

            </header>)
    }
}

// Для работы jquery -> npm install --save jquery?