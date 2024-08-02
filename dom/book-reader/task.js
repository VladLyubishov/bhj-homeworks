const fontSize = document.querySelectorAll('.font-size');
const bookContent = document.querySelector('.book__content')
const fontColor = document.querySelector('.book__control_color').querySelectorAll('.color');
const backgroundColor = document.querySelector('.book__control_background').querySelectorAll('.color');

fontSize.forEach(element => {
    element.addEventListener('click', function(event){
        bookContent.classList.remove('book_fs-small', 'book_fs-big');
        event.preventDefault();
        fontSize.forEach(element => {
            element.classList.remove('font-size_active')
        })
        this.classList.add('font-size_active');
        let attribute = this.getAttribute('data-size');
        switch (attribute) {
            case 'small':
                bookContent.classList.add('book_fs-small');
                break;
            case 'big':
                bookContent.classList.add('book_fs-big');
                break;
        }

    })
});

fontColor.forEach(element => {
    element.addEventListener('click', function(event){
        bookContent.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
        event.preventDefault();
        fontColor.forEach(element => {
            element.classList.remove('color_active')
        })
        this.classList.add('color_active');
        let attribute = this.getAttribute('data-text-color');
        switch (attribute) {
            case 'black':
                bookContent.classList.add('book_color-black');
                break;
            case 'gray':
                bookContent.classList.add('book_color-gray');
                break;
            case 'whitesmoke':
                bookContent.classList.add('book_color-whitesmoke');
                break;
        }
    })
});

backgroundColor.forEach(element => {
    element.addEventListener('click', function(event){
        bookContent.classList.remove('bg_color_black', 'bg_color_gray', 'bg_color_white');
        event.preventDefault();
        backgroundColor.forEach(element => {
            element.classList.remove('color_active')
        })
        this.classList.add('color_active');
        let attribute = this.getAttribute('data-bg-color');
        switch (attribute) {
            case 'black':
                bookContent.classList.add('bg_color_black');
                break;
            case 'gray':
                bookContent.classList.add('bg_color_gray');
                break;
            case 'white':
                bookContent.classList.add('bg_color_white');
                break;
        }
    })
});