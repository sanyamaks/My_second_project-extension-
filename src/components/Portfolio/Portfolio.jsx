import React, {Component} from 'react';
import './Portfolio.css'
import StackGrid, {transitions, easings} from "react-stack-grid"
import GalleryPart from './Gallery_part/GalleryPart'
import Portfolio1 from '../../img/Portfolio1.jpg'
import Portfolio2 from '../../img/Portfolio2.jpg'
import Portfolio3 from '../../img/Portfolio3.jpg'
import Portfolio4 from '../../img/Portfolio4.jpg'

const transition = transitions.scaleDown;



const GalleryData = [
{nameGalleryImage: Portfolio1, nameAlt: '1-ое изображение', nameGalleryTitle:'Название картинки', nameGalleryDescription:'Описание картинки'},
{nameGalleryImage: Portfolio2, nameAlt: '2-ое изображение', nameGalleryTitle:'Название картинки', nameGalleryDescription:'Описание картинки'},
{nameGalleryImage: Portfolio3, nameAlt: '3-ое изображение', nameGalleryTitle:'Название картинки', nameGalleryDescription:'Описание картинки'},
{nameGalleryImage: Portfolio4, nameAlt: '4-ое изображение', nameGalleryTitle:'Название картинки', nameGalleryDescription:'Описание картинки'},
{nameGalleryImage: Portfolio1, nameAlt: '5-ое изображение', nameGalleryTitle:'Название картинки', nameGalleryDescription:'Описание картинки'},
{nameGalleryImage: Portfolio2, nameAlt: '6-ое изображение', nameGalleryTitle:'Название картинки', nameGalleryDescription:'Описание картинки'},
{nameGalleryImage: Portfolio3, nameAlt: '7-ое изображение', nameGalleryTitle:'Название картинки', nameGalleryDescription:'Описание картинки'},
{nameGalleryImage: Portfolio4, nameAlt: '8-ое изображение', nameGalleryTitle:'Название картинки', nameGalleryDescription:'Описание картинки'}

]

let GalleryElement = GalleryData.map(el => {return <GalleryPart
    nameGalleryImage={el.nameGalleryImage}
    nameAlt={el.nameAlt}
    nameGalleryTitle={el.nameGalleryTitle}
    nameGalleryDescription={el.nameGalleryDescription}
/>})



class Portfolio extends Component {
    render() {
        return (
            <main className="gallery">
                <h1>
                    <nobr>Портфолио</nobr>
                </h1>
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
                    {GalleryElement}
                </StackGrid>

            </main>
        );
    }
}

export default Portfolio;