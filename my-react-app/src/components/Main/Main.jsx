import React, {Component} from 'react';
import marinart from '../../img/marinart.jpg'

class Main extends Component {
    render() {
        return (
            <main className="main">
                <div
                    className="main_p">
                    <p>
                        Основной текст, который будет описывать бренд< nobr> M A R I N. A R T. </nobr> Не обязательно много , скорее даже мало, но круто и пафосно.При этои я добвлю здесь текст, чтобы проверить, пушится ли с ноута.
                        Основной текст, который будет описывать бренд < nobr> M A R I N. A R T.</nobr> Не обязательно много , скорее даже мало, но круто и пафосно.При этои я добвлю здесь текст, чтобы проверить, пушится ли с ноута.
                            Основной текст, который будет описывать бренд <nobr> M A R I N. A R T.</nobr> Не обязательно много , скорее даже мало, но круто и пафосно.При этои я добвлю здесь текст, чтобы проверить, пушится ли с ноута.
                    </p>
                    </div>
                    <div className="main_img">
                        <img src={marinart} alt="Photo M A R I N. A R T"></img>
                    </div>

            </main>
    );
    }
    }

    export default Main;