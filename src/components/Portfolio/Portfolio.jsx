import React, {Component} from 'react';
import './Portfolio.css'
import StackGrid, {transitions, easings} from "react-stack-grid"
import GalleryPart from './Gallery_part/GalleryPart'


const transition = transitions.scaleDown;







const Portfolio = (props) => {
    let GalleryElement = props.GalleryData.map(el => {return <GalleryPart
        nameGalleryImage={el.nameGalleryImage}
        nameAlt={el.nameAlt}
        nameGalleryTitle={el.nameGalleryTitle}
        nameGalleryDescription={el.nameGalleryDescription}
    />})
    {
        return (
            <main className="gallery">
                <h1>
                    <nobr>Портфолио</nobr>
                </h1>
                <StackGrid monitorImagesLoaded
                           columnWidth={300}
                           duration={600}
                           gutterWidth={20}
                           gutterHeight={20}
                           easing={easings.cubicOut}
                           appearDelay={60}
                           appear={transition.appear}
                           appeared={transition.appeared}
                           enter={transition.enter}
                           entered={transition.entered}
                           leaved={transition.leaved}>
                    {GalleryElement}
                </StackGrid>

            </main>
        );
    }
}

export default Portfolio;