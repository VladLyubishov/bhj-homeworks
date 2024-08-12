const tooltip = document.querySelectorAll('.has-tooltip');
let divTooltip;

tooltip.forEach(element => {
    element.addEventListener('click', (event) => {
        let newTooltip = document.createElement('div');
        newTooltip.classList.add('tooltip');
        newTooltip.innerText = element.getAttribute('title'); 
        newTooltip.setAttribute('data-position', 'top');
        let position = newTooltip.getAttribute('data-position');
        
        switch(position){
            case 'top':
                newTooltip.style.top = `${(element.offsetTop - 10) - element.offsetHeight}px`;
                newTooltip.style.left = `${element.offsetLeft}px`;
                break;
            case 'left':
                newTooltip.style.top = `${(element.offsetTop - 5) - element.clientHeight}px`;
                let hideElem = document.createElement('p');
                hideElem.innerText =  element.getAttribute('title');
                hideElem.style.position = 'fixed';
                document.body.appendChild(hideElem);
                newTooltip.style.left = `${element.offsetLeft - hideElem.offsetWidth - 10}px`;
                document.body.removeChild(hideElem);
                break;
            case 'right':
                newTooltip.style.top = `${(element.offsetTop - 5) - element.clientHeight}px`;
                newTooltip.style.left = `${element.offsetLeft + element.offsetWidth}px`;
                break;
            case 'bottom':
                newTooltip.style.top = `${element.offsetTop + element.offsetHeight}px`;
                newTooltip.style.left = `${element.offsetLeft}px`;
                break;
        }
        element.insertAdjacentHTML('afterEnd', newTooltip.outerHTML);
        if (divTooltip == null){
            divTooltip = element.nextElementSibling;
        }
        let textLink = element.getAttribute('title');
        if(textLink  == divTooltip.innerText){
            event.preventDefault();
            divTooltip.classList.toggle('tooltip_active')
            divTooltip = element.nextElementSibling;
        } else {
            event.preventDefault();
            divTooltip.classList.remove('tooltip_active')
            element.nextElementSibling.classList.add('tooltip_active')
            divTooltip = element.nextElementSibling;
        }
    })
});
