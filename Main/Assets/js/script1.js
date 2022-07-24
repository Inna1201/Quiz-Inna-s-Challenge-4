var startButton = document.getElementById("start");
var firstQuestionElements = document.getElementById("question");
var questionText = document.getElementById("question1")
var answerButtons = document.getElementById("answerButtons")


startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    firstQuestionElements.classList.remove('hide')
    showQuestions()
}


function showQuestions() {
questionText.innerText = questions[0].question1
answerButtons.innerText = questions[0].question1.answer.text
}


var questions = [
    {
        question1: 'How do you comment a line out in JavaScript?',
        answers: [
            {Text: '&&', correct: false},
            {Text: '$$', correct: false},
            {Text: '//', correct: true},
            {Text: '##', correct: false},
        ]

    }
]

