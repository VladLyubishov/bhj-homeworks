let dropdownMenu = document.querySelector('.dropdown__value');
let dropdownList = document.querySelector('.dropdown__list');
let dropdownItem = document.querySelectorAll('.dropdown__item');

dropdownMenu.addEventListener('click', function(){

    dropdownList.classList.toggle('dropdown__list_active');

})

dropdownItem.forEach((element) => {
    element.addEventListener('click', function(event){

        dropdownMenu.innerText = element.innerText;
        dropdownList.classList.remove('dropdown__list_active');
        event.preventDefault(); 

    })
})