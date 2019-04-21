import React from 'react'


function GalleryPart(props){
        return(
        <div className="gallery__box">
            <div className="gallery__image">
                <img src={props.nameGalleryImage} alt={props.nameAlt}/>
            </div>
            <div className="gallery__text" style={{display: props.nameGalleryTitle || props.nameGalleryDescription ? 'flex' : 'none'}}>
                <h3 className="gallery__title" style = {{display: props.nameGalleryTitle ? 'block' : 'none'}}>{props.nameGalleryTitle}</h3>
                <p className="gallery__description" style={{display: props.nameGalleryDescription ? 'block' : 'none'}}>{props.nameGalleryDescription}</p>
            </div>
        </div>
        )
}


export default GalleryPart;