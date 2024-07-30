let tabs = document.querySelectorAll('.tab');
let content = document.querySelectorAll('.tab__content')

tabs.forEach(function(element, index){
    element.addEventListener('click', function(){ 
        content.forEach((element) => element.classList.remove('tab__content_active'));
        tabs.forEach((element) => element.classList.remove('tab_active'));
        element.classList.add('tab_active');
        content[index].classList.add('tab__content_active');
    })
})
