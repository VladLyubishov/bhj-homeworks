const form = document.querySelector('#signin__form');
const welcome = document.querySelector('.welcome');
const signin = document.querySelector('.signin');
const url = 'https://students.netoservices.ru/nestjs-backend/auth';
let xhr;

if (localStorage.getItem('user_id') != null){
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    welcome.querySelector('span').textContent = localStorage.getItem('user_id');
    logout();
} else {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        formData = new FormData(form);

        if (xhr) {
            xhr.abort();
        }
        xhr = new XMLHttpRequest()
        xhr.addEventListener('load', () => {
            if (xhr.readyState == xhr.DONE) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    if (JSON.parse(xhr.response).success == false){
                        alert('Неверные логин/пароль');
                        form.reset();
                    } else {
                        localStorage.setItem('user_id', JSON.parse(xhr.response).user_id)
                        signin.classList.remove('signin_active');
                        welcome.classList.add('welcome_active');
                        welcome.querySelector('span').textContent = JSON.parse(xhr.response).user_id;
                        logout();
                    }
                } else {
                    alert('Произошла ошибка при отправке запроса на сервер.'); 
                }
            }
        })
        xhr.open('POST', url);
        xhr.send(formData);
    })
}

function logout(){
    document.querySelectorAll('.logout').forEach(button => button.remove());
    welcome.insertAdjacentHTML('beforeEnd', `
       <br> <button class='logout'>Выйти</button>    
    `)
    document.querySelector('.logout').addEventListener('click', () => {
        localStorage.removeItem('user_id');
        signin.classList.add('signin_active');
        welcome.classList.remove('welcome_active')
    })
}