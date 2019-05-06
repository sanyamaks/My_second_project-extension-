import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Portfolio1 from "./img/Portfolio1.jpg";
import Portfolio2 from "./img/Portfolio2.jpg";
import Portfolio3 from "./img/Portfolio3.jpg";
import Portfolio4 from "./img/Portfolio4.jpg";

let GalleryData = [
    {
        nameGalleryImage: Portfolio1,
        nameAlt: '1-ое изображение',
        nameGalleryTitle: 'Название картинки',
        nameGalleryDescription: 'Описание картинки'
    },
    {
        nameGalleryImage: Portfolio2,
        nameAlt: '2-ое изображение',
        nameGalleryTitle: 'Название картинки',
        nameGalleryDescription: 'Описание картинки'
    },
    {
        nameGalleryImage: Portfolio3,
        nameAlt: '3-ое изображение',
        nameGalleryTitle: 'Название картинки',
        nameGalleryDescription: 'Описание картинки'
    },
    {
        nameGalleryImage: Portfolio4,
        nameAlt: '4-ое изображение',
        nameGalleryTitle: 'Название картинки',
        nameGalleryDescription: 'Описание картинки'
    },
    {
        nameGalleryImage: Portfolio1,
        nameAlt: '5-ое изображение',
        nameGalleryTitle: 'Название картинки',
        nameGalleryDescription: 'Описание картинки'
    },
    {
        nameGalleryImage: Portfolio2,
        nameAlt: '6-ое изображение',
        nameGalleryTitle: 'Название картинки',
        nameGalleryDescription: 'Описание картинки'
    },
    {
        nameGalleryImage: Portfolio3,
        nameAlt: '7-ое изображение',
        nameGalleryTitle: 'Название картинки',
        nameGalleryDescription: 'Описание картинки'
    },
    {
        nameGalleryImage: Portfolio4,
        nameAlt: '8-ое изображение',
        nameGalleryTitle: 'Название картинки',
        nameGalleryDescription: 'Описание картинки'
    }

]
let SidebarData = [
    {nameTitleLink:'Главная'},
    {nameTitleLink:'Портфолио'},
    {nameTitleLink:'Обо мне'},
    {nameTitleLink:'Контакты'}
]

ReactDOM.render((<BrowserRouter><App GalleryData={GalleryData} SidebarData={SidebarData}/></BrowserRouter>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
