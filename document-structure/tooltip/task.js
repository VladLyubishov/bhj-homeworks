const tooltip = document.querySelectorAll('.has-tooltip');

tooltip.forEach(element => {
    element.addEventListener('click', (event) => {
        oldTooltip = document.querySelectorAll('.tooltip')
        oldTooltip.forEach(oldTooltip => oldTooltip.remove())
        event.preventDefault();
        let newTooltip = document.createElement('div');
        newTooltip.classList.add('tooltip');
        newTooltip.innerText = element.getAttribute('title'); 
        newTooltip.setAttribute('data-position', 'left');
        newTooltip.style.display = 'block';
        position = newTooltip.getAttribute('data-position');

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
                newTooltip.style.top = `${(element.offsetTop) + element.offsetHeight}px`;
                newTooltip.style.left = `${element.offsetLeft}px`;
                break;
        }


        element.insertAdjacentHTML('beforeEnd', newTooltip.outerHTML);
    });
});