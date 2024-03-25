import '../index.html';

import '../styles/app.scss';

import { pageLoad } from './utils/utils';
import header from "./components/header";
import dropMenu from "./components/drop-menu";
import slider from "./components/slider";
import quantity from "./components/qunatity";
import showMoreAndLess from "./components/show-more-and-less";
import fade from "./components/fade";

pageLoad(() => {
    document.body.classList.add('body--loaded');
    header();
    dropMenu();
    slider();
    quantity();
    showMoreAndLess();
    fade();
});

