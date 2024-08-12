const tasksList = document.querySelector('.tasks__list');
const input = document.querySelector('.tasks__input');
const form = document.querySelector('form');

let tasks;
let tasksFromStorage = localStorage.getItem('tasks');

if (tasksFromStorage) {
  try {
    tasks = JSON.parse(tasksFromStorage); 
  } catch (error) {
    tasks = []; 
  }
} else {
  tasks = []; 
}

window.addEventListener('DOMContentLoaded', () => {
    renderTasks();
})

form.addEventListener('submit', (event) => {
    
    event.preventDefault();
    const taskText = input.value.trim();
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    form.reset();
    renderTasks();

})

tasksList.addEventListener('click', (event) => {
    const taskIndex = Array.from(tasksList.children).indexOf(event.target.parentElement);
    tasks.splice(taskIndex, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
});

function renderTasks() {
    tasksList.innerHTML = '';
    tasks.forEach((task, index) => {
        tasksList.insertAdjacentHTML('afterBegin', `
            <div class="task" data-index="${index}">
            <div class="task__title">${task}</div>
            <a href="#" class="task__remove">&times;</a>
            </div>
        `);
    });
}
 