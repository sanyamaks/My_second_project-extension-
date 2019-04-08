import React, {Component} from 'react';
import marinart from '../../img/marinart.jpg'

export default class Main extends Component {
    render() {
        return (
            <main className="main">
                <h1>
                    <nobr>M A R I N. A R T</nobr>
                </h1>
                <div className="content">
                <div
                    className="content__text">
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
                <div className="content__picture">
                    <img src={marinart} alt="Photo M A R I N. A R T"/>
                </div>
                </div>
            </main>
        );
    }
}
