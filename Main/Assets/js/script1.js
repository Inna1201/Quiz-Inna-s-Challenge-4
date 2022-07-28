var startButton = document.getElementById("start");
var firstQuestionElements = document.getElementById("question");
var questionText = document.getElementById("question1");
var answerButton1 = document.getElementById("answer1");
var answerButton2 = document.getElementById("answer2");
var answerButton3 = document.getElementById("answer3");
var answerButton4 = document.getElementById("answer4");
var timer = document.getElementById("timer");
var endOfQuiz = document.getElementById("all-done");
var submitButton = document.getElementById("button-submit");
var highscores = document.getElementById("highscores");
var initials = document.getElementById("initials");
var backButton = document.getElementById("button-back");
var clearButton = document.getElementById("button-clear");
var list = document.getElementById("list")

var secondsLeft;
var index;
var score;
var timerInterval;

//this variable contains array of quiz questions
var questions = [
    {
        question: 'Which one of the below is NOT a JavaScript statement?',
        answers: [
            { Text1: '1. Declaration Statement', correct: false },
            { Text2: '2. Observation Statements', correct: true },
            { Text3: '3. Expression Statement', correct: false },
            { Text4: '4. Conditional Statements', correct: false },
        ]

    },
    {
        question: 'How do you comment a line out in JavaScript?',
        answers: [
            { Text1: '1. &&', correct: false },
            { Text2: '2. $$', correct: false },
            { Text3: '3. //', correct: true },
            { Text4: '4. ##', correct: false },
        ]

    },
    {
        question: 'How do you declare a JavaScript variable?',
        answers: [
            { Text1: '1. summerTime var', correct: false },
            { Text2: '2. v summerTime', correct: false },
            { Text3: '3. variable summerTime', correct: false },
            { Text4: '4. var summerTime', correct: true },
        ]

    },
    {
        question: 'As of 2022, how many % of websites use JavaScript on the client side for web page behaviour?',
        answers: [
            { Text1: '1. 98%', correct: true },
            { Text2: '2. 88%', correct: false },
            { Text3: '3. 91%', correct: false },
            { Text4: '4. 33%', correct: false },
        ]

    },
]


// activating 'start quiz' button; initiating seconds countdown and going to questions part
startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('started');
    secondsLeft = 60;
    index = 0;
    score = 0;
    timer.textContent = "Seconds left:" + secondsLeft;
    startButton.classList.add('hide');
    firstQuestionElements.classList.remove('hide');
    timer.classList.remove('hide');

    showQuestions();
    setTime()
}

// sets timer function
function setTime() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    // Sets interval in variable
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Seconds left:" + secondsLeft;
        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

//sets function to go back to start if timer ended before all quesions replied
function sendMessage(event) {
    event.preventDefault();
    timer.textContent = "GAME OVER ";
    startButton.classList.remove('hide');
    firstQuestionElements.classList.add('hide');

}

// adds question text into the page and returns the value
function showQuestions() {
    questionText.innerText = questions[index].question;
    answerButton1.innerText = questions[index].answers[0].Text1;
    answerButton2.innerText = questions[index].answers[1].Text2;
    answerButton3.innerText = questions[index].answers[2].Text3;
    answerButton4.innerText = questions[index].answers[3].Text4;

    answerButton1.setAttribute('value', questions[index].answers[0].correct);
    answerButton2.setAttribute('value', questions[index].answers[1].correct);
    answerButton3.setAttribute('value', questions[index].answers[2].correct);
    answerButton4.setAttribute('value', questions[index].answers[3].correct);

}

// makes quiz answer buttons responsive
answerButton1.addEventListener('click', answerCheck);
answerButton2.addEventListener('click', answerCheck);
answerButton3.addEventListener('click', answerCheck);
answerButton4.addEventListener('click', answerCheck);

// if answer is correct adds 10 points to score, if wrong deducts 10 second off timer
// sets message that inform if answer was correct or no
function answerCheck(event) {
    event.preventDefault();
    var buttonClicked = event.target;
    var answer = buttonClicked.value;
    console.log(answer);
    console.log(typeof answer)
    if (answer === 'true') {
        console.log(score);
        score += 10;
        document.querySelector(".message").textContent = "Correct!"
    } else {
        secondsLeft -= 10;
        document.querySelector(".message").textContent = "Wrong!"
    }
    //goes to the next question/ or scores page once all questions replied
    if (index < 3) {
        index += 1;
        showQuestions();
    } else {
        showOutput();
    }

}


// sets score page to appear after all questions replied; shows total score
function showOutput() {
    firstQuestionElements.classList.add('hide');
    timer.classList.add('hide');
    startButton.classList.add('hide');
    endOfQuiz.classList.remove('hide');
    console.log(score);
    document.querySelector(".score").textContent = "Your final score is:" + score;

}


// goes to the final screen where player can see his score against his initials
submitButton.addEventListener('click', submitResults);

function submitResults(event) {
    event.preventDefault();
    var playerInitials = initials.value;
    // stores player info into the local storage as a string
    localStorage.setItem("totalScores", JSON.stringify(score));
    localStorage.setItem("playerInitials", JSON.stringify(playerInitials));
    endOfQuiz.classList.add('hide');
    highscores.classList.remove('hide');
    document.querySelector(".player-list").textContent = playerInitials + ' - ' + score; // should show as a list
    initials.value = '';
}


// goes to the quiz start screen
backButton.addEventListener('click', startAgain);

function startAgain() {
    startButton.classList.remove('hide');
    firstQuestionElements.classList.add('hide');
    highscores.classList.add('hide');
}

// clears player scores
clearButton.addEventListener('click', clearHighscores);

function clearHighscores() {

    document.querySelector(".player-list").textContent = " ";
    list.classList.add('hide');



}






