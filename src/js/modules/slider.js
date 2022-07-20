import Swiper, { Navigation, Pagination } from 'swiper';

// import 'swiper/css';
// import 'swiper/css/navigation';

const slider = () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        modules: [Navigation, Pagination],
        spaceBetween: 20,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            }, 
            992: {
                slidesPerView: 3,
            }
        },
    });
};



export default slider;