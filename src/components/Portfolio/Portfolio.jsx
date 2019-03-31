import React, {Component} from 'react';
import Portfolio1 from '../../img/Portfolio1.jpg'
import Portfolio2 from '../../img/Portfolio2.jpg'
import Portfolio3 from '../../img/Portfolio3.jpg'
import Portfolio4 from '../../img/Portfolio4.jpg'

class Portfolio extends Component {
    render() {
        return (
            <main className="main">

                <div className="main_img">
                    <img src={Portfolio1} alt="1-ое изображение"/>
                </div>
                <div className="main_img">
                    <img src={Portfolio2} alt="2-ое изображение"/>
                </div>
                <div className="main_img">
                    <img src={Portfolio3} alt="3-ое изображение"/>
                </div>
                <div className="main_img">
                    <img src={Portfolio4} alt="4-ое изображение"/>
                </div>
                <div className="main_p">
                    <p>
                        Основной текст, который будет описывать бренд
                        < nobr> M A R I N. A R T.</nobr>
                        Не обязательно много , скорее даже мало, но круто и пафосно.При этои я добвлю здесь текст, чтобы
                        проверить, пушится ли с ноута.
                        Основной текст, который будет описывать бренд < nobr> M A R I N. A R T.</nobr> Не обязательно
                        много , скорее даже мало, но круто и пафосно.При этои я добвлю здесь текст, чтобы проверить,
                        пушится ли с ноута.
                        Основной текст, который будет описывать бренд <nobr> M A R I N. A R T.</nobr> Не обязательно
                        много , скорее даже мало, но круто и пафосно.При этои я добвлю здесь текст, чтобы проверить,
                        пушится ли с ноута.
                    </p>
                </div>


            </main>
        );
    }
}
export default Portfolio;