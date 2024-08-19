const area = document.querySelector('#editor');
createBtn();

window.addEventListener('load', () => {
    area.value = localStorage.getItem('content')
});

area.addEventListener('input', () => {
    localStorage.setItem('content', area.value)
});

function createBtn(){
    const btn = document.createElement('button');
    btn.textContent = 'Очистить содержимое';
    document.querySelector('.card').appendChild(btn);

    btn.addEventListener('click',() => {
        localStorage.removeItem('content')
        area.value = ''
    })
}