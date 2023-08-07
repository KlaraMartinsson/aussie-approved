// Making arrays with all the questions
const questions = [
    {
        question: "In Australian slang, what do they mean by: she'll be right",
        options: [
            { text: "She is correct", correct: false },
            { text: "She is feeling fine", correct: true },
            { text: "Everything is okay", correct: false },
            { text: "The weather is going to be okay", correct: false },
        ]
    },
    {
        question: "In Australian slang, what do they mean by: A cold one",
        options: [
            { text: "A person who is not nice", correct: false },
            { text: "The weather is cold", correct: false },
            { text: "Beer", correct: true },
            { text: "Soda", correct: false },
        ]
    },
    {
        question: "In Australian slang, what do they mean by: mate's rates",
        options: [
            { text: "A discount from a friend", correct: true },
            { text: "A rating scale of who you like the most of your friends", correct: false },
            { text: "How much time you spend with a perticular friend", correct: false },
            { text: "How much money you spend when you are with a perticular friend", correct: false },
        ]
    },
    {
        question: "In Australian slang, how do you say Mcdonald's?",
        options: [
            { text: "Mickey D's", correct: false },
            { text: "Old Mac's", correct: false },
            { text: "Macca's", correct: true },
            { text: "Donald's", correct: false },
        ]
    },
    {
        question: "In Australian slang, what do they mean by: have a crack",
        options: [
            { text: "Try to attempt something", correct: true },
            { text: "Get a paper's cut", correct: false },
            { text: "Visit the chiropractor", correct: false },
            { text: "Start a fight", correct: false },
        ]
    },
];

//Getting all necessary elements

const continueBtn = document.getElementById('continue-btn')
const rulesBox = document.getElementById('rules-box')
continueBtn.addEventListener('click', startQuiz)
const quizGame = document.getElementsByClassName('quiz-game')[0]


function startQuiz() {
    console.log('Started')
    rulesBox.classList.add('hide')
    quizGame.classList.remove('hide')
};