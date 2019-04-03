import React, {Component} from 'react';
import StackGrid, {transitions, easings} from "react-stack-grid"
import Portfolio1 from '../../img/Portfolio1.jpg'
import Portfolio2 from '../../img/Portfolio2.jpg'
import Portfolio3 from '../../img/Portfolio3.jpg'
import Portfolio4 from '../../img/Portfolio4.jpg'

const transition = transitions.scaleDown;



class Portfolio extends Component {
    render() {
        return (
            <main className="gallery">
                <StackGrid monitorImagesLoaded
                           columnWidth={200}
                           duration={600}
                           gutterWidth={15}
                           gutterHeight={15}
                           easing={easings.cubicOut}
                           appearDelay={60}
                           appear={transition.appear}
                           appeared={transition.appeared}
                           enter={transition.enter}
                           entered={transition.entered}
                           leaved={transition.leaved}>
                    <div className="gallery__image">
                        <img src={Portfolio1} alt="1-ое изображение"/>
                    </div>
                    <div className="gallery__image">
                        <img src={Portfolio2} alt="2-ое изображение"/>
                    </div>
                    <div className="gallery__image">
                        <img src={Portfolio3} alt="3-ое изображение"/>
                    </div>
                    <div className="gallery__image">
                        <img src={Portfolio4} alt="4-ое изображение"/>
                    </div>
                    <div className="gallery__image">
                        <img src={Portfolio1} alt="1-ое изображение"/>
                    </div>
                    <div className="gallery__image">
                        <img src={Portfolio2} alt="2-ое изображение"/>
                    </div>
                    <div className="gallery__image">
                        <img src={Portfolio3} alt="3-ое изображение"/>
                    </div>
                    <div className="gallery__image">
                        <img src={Portfolio4} alt="4-ое изображение"/>
                    </div>
                </StackGrid>

            </main>
        );
    }
}
export default Portfolio;