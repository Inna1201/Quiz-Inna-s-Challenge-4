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
questionText.innerText = questions.question1
}


var questions = [
    {
        question1: 'Which one of the below is NOT a JavaScript statement?',
        answers: [
            {Text: '&&', correct: false},
            {Text: '$$', correct: false},
            {Text: '//', correct: true},
            {Text: '##', correct: false},
        ]

    }
]

