const rotator = document.querySelectorAll('.rotator__case');
let i = 0;

window.addEventListener('load', () => {
    setInterval(() => {
        rotator[i].classList.remove('rotator__case_active');
        i = (i + 1) % rotator.length;
        rotator[i].classList.add('rotator__case_active');
    }, rotator[i].getAttribute('data-speed'));
});

