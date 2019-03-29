import React, { Component } from 'react';
import footer_logo_facebook from '../../img/footer_logo-facebook.png';
import footer_logo_google from '../../img/footer_logo_google.png'
import footer_logo_twitter from '../../img/footer_logo_twitter.png'





export default class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <div className="footer_p">
                    <p>by Alex M</p>
                </div>
                <div className="footer_img">
                    <a href="https://twitter.com/"><img className="logo-twitter" src={footer_logo_twitter}
                                                        alt="Twitter"/></a>
                    <a href="https://plus.google.com/discover"><img className="logo-google" src={footer_logo_google}
                                                                    alt="Google+"/></a>
                    <a href="https://facebook.com"><img className="logo-facebook" src={footer_logo_facebook}
                                                        alt="Facebook"/></a>
                </div>

            </footer>
        );
    }
}

