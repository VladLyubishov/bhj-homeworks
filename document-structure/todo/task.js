const tasksList = document.querySelector('.tasks__list');
const input = document.querySelector('.tasks__input');
const form = document.querySelector('form');
let storageCounter = 0;

window.addEventListener('DOMContentLoaded', () => {

    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        tasksList.insertAdjacentHTML('afterBegin', localStorage.getItem(key))
    }
})

form.addEventListener('submit', (event) => {
    
    event.preventDefault()

    let task = document.createElement('div');
    task.classList.add('task');
    task.setAttribute('storageCounter', storageCounter)

    let taskTitle = document.createElement('div');
    taskTitle.innerText = input.value;
    taskTitle.classList.add('task__title');

    let taskRemove = document.createElement('a');
    taskRemove.innerText = 'X';
    taskRemove.classList.add('task__remove');

    task.insertAdjacentHTML('afterBegin', taskTitle.outerHTML);
    task.insertAdjacentHTML('beforeEnd', taskRemove.outerHTML);
    tasksList.insertAdjacentHTML('afterBegin', task.outerHTML);

    localStorage.setItem(`storage${storageCounter}`, task.outerHTML);
    storageCounter++;
    form.reset();

})

tasksList.addEventListener('click', (event) => {
    if (event.target.classList.contains('task__remove')) {
        event.preventDefault();
        event.target.parentElement.remove();
        localStorage.removeItem(`storage${event.target.parentElement.getAttribute('storageCounter')}`);
    }
});