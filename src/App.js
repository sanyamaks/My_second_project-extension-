import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Portfolio from './components/Portfolio/Portfolio'
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
                        <Route exact path='/' component={Main}/>
                        <Route exact path='/Portfolio' component={Portfolio}/>
                    </Switch>
                <Footer/>
            </div>
        );
    }
}


export default App;
