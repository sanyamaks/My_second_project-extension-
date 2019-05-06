import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import {Switch, Route} from 'react-router-dom'

const App = (props) => {

    {

        return (
            <div className="App">
                <Header SidebarData={props.SidebarData}/>
                <Switch>
                    {/*<Route exact path='/' component={Main}/>*/}
                    {/*Из-за переноса на сервер гитхаб необходимо убрать ссылку (менять их) для правильных переходов*/}
                    <Route exact path='/My_second_project-extension-' component={Main}/>
                    <Route path='/My_second_project-extension-/Portfolio'
                           render={() => <Portfolio GalleryData={props.GalleryData}/>}/>
                    <Route exact path='/My_second_project-extension-/About' component={About}/>
                    <Route exact path='/My_second_project-extension-/Contact' component={Contact}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

    export default App;