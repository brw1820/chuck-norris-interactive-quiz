const correctAnswers = ['C', 'A', 'B', 'C'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.question1.value, form.question2.value, form.question3.value, form.question4.value];

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    // show result on page
    scrollTo(0,0);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
})

// let i = 0;
// const timer = setInterval(() => {
// i++;
// if(i === 5) {
//     clearInterval(timer)
// }
// }, 1000);

// setTimeout(() => {
//     alert('')
// }, 3000)