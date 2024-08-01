let rotator =  document.querySelectorAll('.rotator__case');

window.addEventListener('load', function(){
    for(i = 0; i < rotator.length; i++){
      
            
        rotator[i].classList.remove('rotator__case_active');
        if (rotator[i].nextElementSibling){
            rotator[i].nextElementSibling.classList.add('rotator__case_active')
        }

        
    }  
})

function change(){
    
}