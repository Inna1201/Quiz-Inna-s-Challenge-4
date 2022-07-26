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

var secondsLeft = 60;
var index = 0;

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

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('started');
    startButton.classList.add('hide');
    firstQuestionElements.classList.remove('hide');
    timer.classList.remove('hide');
    showQuestions();
    setTime()
}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Seconds left:" + secondsLeft;
        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    timer.textContent = "GAME OVER ";
    startButton.classList.remove('hide');
    firstQuestionElements.classList.add('hide');

}

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

answerButton1.addEventListener('click', answerCheck);
answerButton2.addEventListener('click', answerCheck);
answerButton3.addEventListener('click', answerCheck);
answerButton4.addEventListener('click', answerCheck);


var score = 0

function answerCheck(event) {
    event.preventDefault();
    var buttonClicked = event.target;
    var answer = buttonClicked.value;
    console.log(answer);
    if (answer === true) {
        score += 10;
    } else {
        secondsLeft -= 10;
    }
    
    if(index < 3) {
        index += 1;
        showQuestions();
    } else {
         showOutput();
    }
    
}

var totalScores = score.value; // shows as undefined
var playerInitials = initials.value;


localStorage.setItem("totalScores", JSON.stringify(totalScores));
localStorage.setItem("playerInitials", JSON.stringify(playerInitials));

function showOutput () {
    firstQuestionElements.classList.add('hide');
    timer.classList.add('hide');  
    startButton.classList.add('hide');
    endOfQuiz.classList.remove('hide');
    console.log(totalScores);
    document.querySelector(".score").textContent = "Your final score is:" + totalScores;

}

submitButton.addEventListener('click', submitResults);

function submitResults() {
    endOfQuiz.classList.add('hide');
    highscores.classList.remove('hide');
    document.querySelector(".player-list").textContent = initials.value + totalScores; // should show as a list
}



backButton.addEventListener('click', startAgain);

function startAgain() {
    startButton.classList.remove('hide');
    firstQuestionElements.classList.add('hide');
    highscores.classList.add('hide');
}




// start page appears by itself
// seconds with second attempt goes backwards






// 1. Compare user answer with actual answer
// 2. If user answer is correct add 10 to user score value and increment index variable by 1 and call showQuestions function again
// 3. If user answer is wrong decrement timer by 1 and increment index variable by 1 and call showQuestions function again

// if (showQuestions === true)
// score.push(10)
// This will work when you will have event listener added for all 4 answers buttons to check for right or wrong asnwer
// Once you have that you can check for right or wrong answer and increment index by 1 using index++ (Because now index will be changed from 0 to 1 so it will take a next question from an array)
// And then call answerCheck function again to display next question (incrementing index variable by 1 and calling showQuestion function)
// You will need IF ELSE statement for checking answer



// answerButton1.addEventListener('click', secondQuestion);
// answerButton2.addEventListener('click', secondQuestion);
// answerButton3.addEventListener('click', secondQuestion);
// answerButton4.addEventListener('click', secondQuestion);

// function secondQuestion() {
//     questionText.innerText = questions[1].question2;
//     answerButton1.innerText = questions[1].answers[0].Text1;
//     answerButton2.innerText = questions[1].answers[1].Text2;
//     answerButton3.innerText = questions[1].answers[2].Text3;
//     answerButton4.innerText = questions[1].answers[3].Text4;

// }

// answerButton1.addEventListener('click', nextQuestion);
// answerButton2.addEventListener('click', nextQuestion);
// answerButton3.addEventListener('click', nextQuestion);
// answerButton4.addEventListener('click', nextQuestion);

// function nextQuestion() {
//     questionText.innerText = questions[2].question3;
//     answerButton1.innerText = questions[2].answers[0].Text1;
//     answerButton2.innerText = questions[2].answers[1].Text2;
//     answerButton3.innerText = questions[2].answers[2].Text3;
//     answerButton4.innerText = questions[2].answers[3].Text4;

// }

// why is called before click