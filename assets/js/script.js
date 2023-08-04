// Adding all necessary elements
const startBtn = document.querySelector('.start-btn button');
const rulesBox = document.querySelector('#rules-box');

// If Start Quiz button is clicked
startBtn.onclick = ()=>{
    rulesBox.classList.add('active')
};