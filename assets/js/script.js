//Getting all necessary elements

const continueBtn = document.getElementById('continue-btn');
const exitBtn = document.getElementById('exit-btn');
const rulesBox = document.getElementById('rules-box');
const quizBox = document.getElementsByClassName('quiz-box')[0];
const feedbackBox = document.getElementsByClassName('feedback-box')[0];

const questionTitle = document.getElementById('question-title');
const optionList = document.getElementById('answer-buttons');

const nextBtn = document.getElementById('next-btn');

let scoreCounters = 0;
let scoreNum = 1;
//Starts quiz when continue button is clicked
continueBtn.addEventListener('click', startQuiz);
//Start counting scores when contiue button is clicked
continueBtn.addEventListener('click', () => {
    showScore(1);
});

//Gives random questions in the quiz
let randomQuestions, currentQuestionIndex;

//Gives new questions when the next button is clicked
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    scoreCounters++;
    scoreNum++;
    giveRandomQuestion();
    showScore(scoreNum);
});

// Hiding the rule box and showing question box, when clicking on continue button
function startQuiz() {
    rulesBox.classList.add('hide');
    randomQuestions = questions.sort(() => Math.random() - .5); //Randomise questions
    currentQuestionIndex = 0;
    quizBox.classList.remove('hide');
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
        optionList.appendChild(button);
    });
}

//Change color when an answer is clicked
function resetQuestions() {
    nextBtn.classList.add('hide');
    while (optionList.firstChild) {
        optionList.removeChild
            (optionList.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    Array.from(optionList.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    nextBtn.classList.remove('hide');
}

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

//Checks the scores
function showScore(index) {
    const scoreCounter = document.getElementsByClassName('scores')[0];
    let scores = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>questions</span>';
    scoreCounter.innerHTML = scores;
}

/*
function setNextBtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showFeedback();
    }
}

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        setNextBtn();
    });

function showFeedback() {
    resetState();
    quizBox.innerHTML = `You scored ${score} out of ${questions.length}!`;
    exitBtn.innerHTML = "Exit Quiz";
    exitBtn.style.display = "block";
}
*/
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
    },
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
        question: "In Australian slang, what do they mean by: he could put a horn on a jellyfish?",
        answers: [
            { text: "He's very successful", correct: false },
            { text: "He's a liar", correct: false },
            { text: "He's a dreamer", correct: false },
            { text: "He's very hot", correct: true }
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
        question: "In Australian slang, what do they mean by: going to Woop Woop?",
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
    },
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