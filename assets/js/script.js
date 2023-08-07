//Getting all necessary elements

const continueBtn = document.getElementById('continue-btn')
const rulesBox = document.getElementById('rules-box')
continueBtn.addEventListener('click', startQuiz)
const quizBox = document.getElementsByClassName('quiz-box')[0]

const questionTitle = document.getElementById('question-title')
const optionList = document.getElementById('answer-buttons')

const nextBtn = document.getElementById('next-btn')

//Gives random questions in the quiz
let randomQuestions, currentQuestionIndex

// Hiding the rule box and showing question box, while clicking on continue button
function startQuiz() {
    rulesBox.classList.add('hide')
    randomQuestions = questions.sort(()=> Math.random() - .5) //Randomise questions
    currentQuestionIndex = 0
    quizBox.classList.remove('hide')
    giveNextQuestion()
}

//Gives random questions in the quiz
function giveNextQuestion() {
    resetQuestions()
    showQuestion(randomQuestions[currentQuestionIndex])
}

//Shows the questions in the game
function showQuestion(question) {
    questionTitle.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('answer-btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        optionList.appendChild(button)
    })
}

function resetQuestions() {
nextBtn.classList.add('hide')
    while (optionList.firstChild) {
        optionList.removeChild
        (optionList.firstChild)
    }
}

function selectAnswer(e) {

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
    }
];