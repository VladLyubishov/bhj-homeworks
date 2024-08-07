const rotator = document.querySelectorAll('.rotator__case');
let i = 0;
window.addEventListener('load', () => {
    changeWord()
});
function changeWord(){
    const interval =  setInterval(() => {
        rotator[i].classList.remove('rotator__case_active');
        i = (i + 1) % rotator.length;
        rotator[i].style.color = rotator[i].getAttribute('data-color')
        rotator[i].classList.add('rotator__case_active');
        clearInterval(interval);
        changeWord();
    }, Number(rotator[i].getAttribute('data-speed')));
}
