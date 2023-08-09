//Getting all necessary elements

const continueBtn = document.getElementById('continue-btn');
const exitBtn = document.getElementById('exit-btn');
const nextBtn = document.getElementById('next-btn');
const rulesBox = document.getElementById('rules-box');
const quizBox = document.getElementsByClassName('quiz-box')[0];
const feedbackBox = document.getElementsByClassName('feedback-box')[0];
const timeCount = quizBox.querySelector('.timer .timer-sec');
const questionTitle = document.getElementById('question-title');
const answerList = document.getElementById('answer-buttons');

const counterQuestions = document.getElementsByClassName('counter')[0];

//Counts the questions in the quiz
let questionCounters = 0;
let questionNum = 1;
let timeCounter;
let timeValue = 15;
let scores = 0;
//Starts quiz when continue button is clicked
continueBtn.addEventListener('click', startQuiz);

//Start counting questions when contiue button is clicked
continueBtn.addEventListener('click', () => {
    showQuestionCounter(1);
    Starttimer(15);
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
    clearInterval(timeCounter);
    Starttimer(timeValue);
});

// Hiding the rule box and showing question box, when clicking on continue button
function startQuiz() {
    rulesBox.classList.add('hide');
    randomQuestions = questions.sort(() => Math.random() - .5); //Randomise questions
    currentQuestionIndex = 0;
    quizBox.classList.remove('hide');
    counterQuestions.classList.remove('hide');
    giveRandomQuestion();
}

//Gives random questions in the quiz
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
    if (randomQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide'); //Shows next button when answer is selected
    } else {
        showFeedback()
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
function Starttimer(time) {
    timeCounter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 0){
            clearInterval(timeCounter);
            timeCount.textContent = '00';
        }
    }
}

//Checks the question counter in the footer of the quiz
function showQuestionCounter(index) {
    const questionCounter = document.getElementsByClassName('counter')[0];
    let counter = '<span><p>' + index + '</p>/<p>' + questions.length + '</p>Questions</span>';
    questionCounter.innerHTML = counter;
}

// Shows Feedback box
function showFeedback() {
    quizBox.classList.add('hide'); // Hides the quiz box
    feedbackBox.classList.remove('hide') // Shows the Feedback box
}

// Making arrays with all the questions
const questions = [
    {
        question: "In Australian slang, what do they mean by: she'll be right?",
        answers: [
            { text: "She is correct", correct: false },
            { text: "She is feeling fine", correct: false },
            { text: "Everything is okay", correct: true },
            { text: "The weather is going to be okay", correct: false }
        ]
    },/*
    {
        question: "In Australian slang, what do they mean by: A cold one?",
        answers: [
            { text: "A person who is not nice", correct: false },
            { text: "The weather is cold", correct: false },
            { text: "Beer", correct: true },
            { text: "Soda", correct: false }
        ]
    },
    {
        question: "In Australian slang, what do they mean by: mate's rates?",
        answers: [
            { text: "A discount from a friend", correct: true },
            { text: "A rating scale of who you like the most of your friends", correct: false },
            { text: "How much time you spend with a perticular friend", correct: false },
            { text: "How much money you spend when you are with a perticular friend", correct: false }
        ]
    },
    {
        question: "In Australian slang, how do you say Mcdonald's?",
        answers: [
            { text: "Mickey D's", correct: false },
            { text: "Old Mac's", correct: false },
            { text: "Macca's", correct: true },
            { text: "Donald's", correct: false }
        ]
    },
    {
        question: "In Australian slang, what do they mean by: have a crack?",
        answers: [
            { text: "Try to attempt something", correct: true },
            { text: "Get a paper's cut", correct: false },
            { text: "Visit the chiropractor", correct: false },
            { text: "Start a fight", correct: false }
        ]
    },
    {
        question: "In Australian slang, what do they mean by: hard yakka?",
        answers: [
            { text: "Hard work", correct: true },
            { text: "Hard helmet", correct: false },
            { text: "Hard year", correct: false },
            { text: "Hard life", correct: false }
        ]
    },
    {
        question: "In Australian slang, what do they mean by being: knackered?",
        answers: [
            { text: "Hungry", correct: false },
            { text: "Excited", correct: false },
            { text: "Tired", correct: true },
            { text: "Angry", correct: false }
        ]
    },
    {
        question: "In Australian slang, what do they mean by: drinking goon?",
        answers: [
            { text: "Drinking cheap, boxed wine", correct: true },
            { text: "Drinking homemade alcohol", correct: false },
            { text: "Drinking is good", correct: false },
            { text: "Drinking is done for today", correct: false }
        ]
    },

    {
        question: "In Australian slang, what do they mean by: thongs?",
        answers: [
            { text: "Tv", correct: false },
            { text: "G-string", correct: false },
            { text: "Computer", correct: false },
            { text: "Flip flops", correct: true }
        ]
    },
    {
        question: "In Australian slang, what do they mean by: a dogs breakfast?",
        answers: [
            { text: "Ugly", correct: false },
            { text: "A mess", correct: true },
            { text: "Gross food", correct: false },
            { text: "Quirky", correct: false }
        ]
    },
    {
        question: "In Australian slang, what do they mean by: barbie?",
        answers: [
            { text: "Barbie doll", correct: false },
            { text: "Beach", correct: false },
            { text: "Barbecue", correct: true },
            { text: "Tiny person", correct: false }
        ]
    },
    {
        question: "In Australian slang, what do they mean by: dunny?",
        answers: [
            { text: "A toilet", correct: false },
            { text: "A pantry", correct: false },
            { text: "A toilet", correct: true },
            { text: "A dustbin", correct: false }
        ]
    },
    {
        question: "In Australian slang, what do they mean by: Woop Woop?",
        answers: [
            { text: "The outback", correct: false },
            { text: "In New South Wales", correct: false },
            { text: "Somewhere far away", correct: true },
            { text: "New Zealand", correct: false }
        ]
    },
    {
        question: "In Australian slang, what do they mean by: put a sock on it?",
        answers: [
            { text: "Go away", correct: false },
            { text: "Shut up", correct: true },
            { text: "Try harder", correct: false },
            { text: "To fix something", correct: false }
        ]
    },*/
    {
        question: "In Australian slang, what do they mean by: chock-a-block?",
        answers: [
            { text: "It's wierd", correct: false },
            { text: "It's broken", correct: false },
            { text: "It's full", correct: true },
            { text: "It's sweet", correct: false }
        ]
    }
];