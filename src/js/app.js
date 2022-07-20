import * as flsFunctions from './modules/functions.js';
import mobileMenu from './modules/mobile-menu.js';
import modal from './modules/modal.js';
import slider from './modules/slider.js';

flsFunctions.isWebp();
mobileMenu();
modal();
slider();

window.onscroll = function fixHeader() {
    const header = document.querySelector('.header');
    if(window.pageYOffset > 50) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }
}
