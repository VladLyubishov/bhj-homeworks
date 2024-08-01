const reveal = document.querySelectorAll('.reveal')

reveal.forEach(element => {
    setInterval(function(){
        if (isVisible(element)){
    
            element.classList.add('reveal_active') 
    
        } else {
            element.classList.remove('reveal_active') 
        }
    
    } , 500)  
});

function isVisible(element){
    const {top, bottom} = element.getBoundingClientRect()
    if (bottom < 0){
        return false
    }
    if (top > window.innerHeight){
        return false
    }
    return true
}