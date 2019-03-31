import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import {Switch, Route} from 'react-router-dom'


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <h1>
                    <nobr>M A R I N. A R T</nobr>
                </h1>
                    <Switch>
                        {/*<Route exact path='/' component={Main}/>*/}
                        {/*Из-за переноса на сервер гитхаб необходимо убрать ссылку (менять их) для правильных переходов*/}
                        <Route exact path='/My_second_project-extension-' component={Main}/>
                        <Route exact path='/My_second_project-extension-/Portfolio' component={Portfolio}/>
                        <Route exact path='/My_second_project-extension-/About' component={About}/>
                        <Route exact path='/My_second_project-extension-/Contact' component={Contact}/>
                    </Switch>
                <Footer/>
            </div>
        );
    }
}


export default App;
