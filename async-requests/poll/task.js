const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');
const url = new URL('https://students.netoservices.ru/nestjs-backend/poll');
const xhr = new XMLHttpRequest();
let parsedJSON;

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE){
        parsedJSON = JSON.parse(xhr.responseText);
        pollTitle.textContent = parsedJSON.data.title;
        parsedJSON.data.answers.forEach(element => {
            btnElem = document.createElement('button');
            btnElem.classList.add('poll__answer');
            btnElem.textContent = element;
            pollAnswers.appendChild(btnElem);
        });
        const pollAnswer = document.querySelectorAll('.poll__answer')
        pollAnswer.forEach(element => {
            element.addEventListener('click', (event) => {
                alert('Спасибо, ваш голос засчитан!');
                xhr.addEventListener('readystatechange', () => {
                    if(xhr.readyState === xhr.DONE){
                        let answers = JSON.parse(xhr.responseText);
                        vote(answers)
                        setTimeout(() => { 
                            window.location.reload()
                        }, 3000)
                    }
                })
                xhr.open('POST', url);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.send(`vote=${parsedJSON.id}&answer=${parsedJSON.data.answers.indexOf(event.target) + 1}`);
            })
        });
    };
})

xhr.open('GET', url);
xhr.send();

function vote(answers){
    while (pollAnswers.firstChild) {
        pollAnswers.removeChild(pollAnswers.firstChild);
    }
    let totalVotes = 0;
    answers.stat.forEach((element) => {
        totalVotes += element.votes;
    });
    answers.stat.forEach((element) => {
        const percentage = ((element.votes / totalVotes) * 100).toFixed(2);
        pollAnswers.insertAdjacentHTML('beforeEnd', `
            <div>
              ${element.answer} <b>${percentage}%</b>
            </div>
        `);
    })
}
