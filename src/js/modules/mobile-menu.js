const mobileMenu = () => {
    const body = document.querySelector('body');
    const burger = document.querySelector('.header-burger');
    const menu = document.querySelector('.header__menu');
    const buttonMenu = document.querySelector('.header__button');

    let activeToggle = () => {
        menu.classList.toggle('active');
        buttonMenu.classList.toggle('active');
        body.classList.toggle('lock');
    }

    burger.addEventListener('click', () => {
        activeToggle();
    });

    menu.addEventListener('click', (event) => {
        let target = event.target.closest('li');

        if (target) {
            activeToggle();
        }
    });
}

export default mobileMenu;