const items = document.querySelector('#items');
const xhr = new XMLHttpRequest();
const loader = document.querySelector('.loader');
const url = new URL('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
const valute = localStorage.getItem('valuteJSON') || [];

window.addEventListener('DOMContentLoaded', () => {
    if (valute.length != 0){
        showValute(valute);
    } else {
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === xhr.DONE){
                loader.classList.remove('loader_active');
                const parsedJSON = JSON.parse(xhr.responseText).response.Valute;
                showValute(parsedJSON);
                saveValute(parsedJSON);
            };
        })
        xhr.open('GET', url);
        xhr.send();
    }
})

function showValute(JSON){
    for (const element in JSON) {
        items.insertAdjacentHTML('beforeEnd', `
            <div class="item">
              <div class="item__code">
                    ${JSON[element].CharCode}
                </div>
                <div class="item__value">
                     ${JSON[element].Value}
                </div>
            </div>    
        `);
    };
}

function saveValute(parsedJSON){
    localStorage.setItem('valuteJSON', JSON.stringify(parsedJSON))
}