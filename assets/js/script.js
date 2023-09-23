//Getting all necessary elements

const continueBtn = document.getElementById('continue-btn');
const nextBtn = document.getElementById('next-btn');
const exitBtn = document.getElementById('exit-btn');
const rulesBox = document.getElementById('rules-box');
const quizBox = document.getElementsByClassName('quiz-box')[0];
const feedbackBox = document.getElementsByClassName('feedback-box')[0];
const countdownTimer = document.getElementById("countdown-timer");
const questionTitle = document.getElementById('question-title');
const answerList = document.getElementById('answer-buttons');
const counterQuestions = document.getElementsByClassName('counter')[0];
let scoreText = document.getElementsByClassName('score-text')[0];

let questionCounters = 0;
let questionNum = 1;
let scores = 0;
let time = 0;
let timer = setInterval(showTimer, 1000);


//Start quiz and counting questions when contiue button is clicked
continueBtn.addEventListener('click', () => {
    showQuestionCounter(1);
    startQuiz();
});

//Gives random questions in the quiz
let randomQuestions, currentQuestionIndex;

//Gives new questions when the next button is clicked, counts every question, starts the timer
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    questionCounters++;
    questionNum++;
    giveRandomQuestion();
    showQuestionCounter(questionNum);
});

//If exit button is clicked goes to home page
exitBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Hiding the rule box and showing question box, when clicking on continue button
function startQuiz() {
    time = 15;
    rulesBox.classList.add('hide');
    randomQuestions = questions.sort(() => Math.random() - 0.5); //Randomise questions
    currentQuestionIndex = 0;
    quizBox.classList.remove('hide');
    counterQuestions.classList.remove('hide');
    giveRandomQuestion();
    showTimer();
    countdownTimer.classList.remove("hide");
}

//Gives random questions in the quiz and resets
function giveRandomQuestion() {
    resetQuestions();
    showQuestion(randomQuestions[currentQuestionIndex]);
}

//Shows the questions in the game
function showQuestion(question) {
    questionTitle.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerList.appendChild(button);
    });
}

// Resets the old questions to make room for the new ones
function resetQuestions() {
    time = 15;
    nextBtn.classList.add('hide');
    while (answerList.firstChild) {
        answerList.removeChild
            (answerList.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    Array.from(answerList.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (correct) {
        scores += 1;
    }
    if (randomQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide'); //Shows next button when answer is selected
    } else {
        showFeedback();
    }
}

//Change color when an answer is clicked
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

// Timer in the quiz 
function showTimer() {
    countdownTimer.innerHTML = `Time left: ${time}`;
    time--;
    if (time < 0 && currentQuestionIndex < 14) {
        currentQuestionIndex++;
        questionCounters++;
        questionNum++;
        giveRandomQuestion();
        showQuestionCounter(questionNum);
    } else if (time < 0 && currentQuestionIndex === 14)
        showFeedback();
}

//Checks the question counter in the footer of the quiz
function showQuestionCounter(index) {
    const questionCounter = document.getElementsByClassName('counter')[0];
    let counter = '<span><p>' + index + '</p>/<p>' + questions.length + '</p>Questions</span>'; 
    questionCounter.innerHTML = counter;
}

// Shows Feedback box
function showFeedback() {
    time = 1000;
    countdownTimer.classList.add("hide");
    quizBox.classList.add('hide'); // Hides the quiz box
    feedbackBox.classList.remove('hide'); // Shows the Feedback box
    scoreText.innerText = `Mate, you finished the quiz! You have scored ${scores}/15 points. Good luck on your new adventures in Australia!`;
}