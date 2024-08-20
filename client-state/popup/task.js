const modal = document.querySelector('.modal')
const close = document.querySelector('.modal__close_times')

if (getCookie('modal') != 'active'){
    modal.classList.add('modal_active');
    close.addEventListener('click', () => {
        document.cookie = 'modal=active'
        modal.classList.remove('modal_active');
    })
}

function getCookie (name) {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
        .pop()
        .split(";")
        .shift();
    }
}    
