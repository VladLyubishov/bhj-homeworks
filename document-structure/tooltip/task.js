const tooltip = document.querySelectorAll('.has-tooltip');
let lastTooltip = null; 

tooltip.forEach(element => {
    
    let newTooltip = document.createElement('div');
    newTooltip.classList.add('tooltip');
    newTooltip.innerText = element.getAttribute('title'); 
    element.insertAdjacentHTML('afterEnd', newTooltip.outerHTML);

    element.addEventListener('click', (event) => {
        
        event.preventDefault();
        const tooltipDiv = element.nextElementSibling;

        if (lastTooltip && lastTooltip !== tooltipDiv) {
            lastTooltip.classList.remove('tooltip_active');
        }

        tooltipDiv.setAttribute('data-position', 'top');
        let position = tooltipDiv.getAttribute('data-position');
        switch(position){
            case 'top':
                tooltipDiv.style.top = `${(element.offsetTop - 10) - element.offsetHeight}px`;
                tooltipDiv.style.left = `${element.offsetLeft}px`;
                break;
            case 'left':
                tooltipDiv.style.top = `${(element.offsetTop - 5) - element.clientHeight}px`;
                let hideElem = document.createElement('p');
                hideElem.innerText =  element.getAttribute('title');
                hideElem.style.position = 'fixed';
                document.body.appendChild(hideElem);
                tooltipDiv.style.left = `${element.offsetLeft - hideElem.offsetWidth - 10}px`;
                document.body.removeChild(hideElem);
                break;
            case 'right':
                tooltipDiv.style.top = `${(element.offsetTop - 5) - element.clientHeight}px`;
                tooltipDiv.style.left = `${element.offsetLeft + element.offsetWidth}px`;
                break;
            case 'bottom':
                tooltipDiv.style.top = `${element.offsetTop + element.offsetHeight}px`;
                tooltipDiv.style.left = `${element.offsetLeft}px`;
                break;
        }
        tooltipDiv.classList.toggle('tooltip_active')
        lastTooltip = tooltipDiv;
    })
});