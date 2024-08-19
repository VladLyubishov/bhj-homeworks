const modal = document.querySelector('.modal')
const close = document.querySelector('.modal__close_times')
modal.classList.add('modal_active');


close.addEventListener('click', () => {
    document.cookie = "moduleClose=active";
    modal.classList.remove('modal_active');
})