import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <h1>
                    <nobr>M A R I N. A R T</nobr>
                </h1>
                <Main/>
                <Footer/>

            </div>
        );
    }
}


export default App;
