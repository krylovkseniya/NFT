const modal = () => {
    const buttonOpen = document.querySelector('.header__button');
    const buttonsOpen = Array.from(document.querySelectorAll('.works__button'));
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal__close');
    const modalOverlay = document.querySelector('.modal__overlay');
    const inputNumber = document.querySelector('.input__number');
    
    function openModal() {
        modal.classList.add('modal_active');
    }

    function closeModal() {
        modal.classList.remove('modal_active');
    }

    buttonOpen.addEventListener('click', openModal);
    buttonsOpen.forEach((item) => {
      item.addEventListener('click', openModal)
    })


    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeModal()
        }
    });

    inputNumber.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/[^\d]/g, '');
    });
}

export default modal;