var startButton = document.getElementById("start");
var firstQuestionElements = document.getElementById("question");
var questionText = document.getElementById("question1")
var answerButton1 = document.getElementById("answer1")
var answerButton2 = document.getElementById("answer2")
var answerButton3 = document.getElementById("answer3")
var answerButton4 = document.getElementById("answer4")



startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    firstQuestionElements.classList.remove('hide')
    showQuestions()
}


function showQuestions() {
questionText.innerText = questions[0].question1
answerButton1.innerText = questions[0].question1.answers.Text
}


var questions = [
    {
        question1: 'How do you comment a line out in JavaScript?',
        answers: [
            {Text1: '&&', correct: false},
            {Text2: '$$', correct: false},
            {Text3: '//', correct: true},
            {Text4: '##', correct: false},
        ]

    }
]

