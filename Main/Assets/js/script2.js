var clearButton = document.getElementById ("button-clear")
var backButton = document.getElementById("button-back");
// gets player info from the local storage and transforms into an object
var playerInitials = JSON.parse(localStorage.getItem("playerInitials"));
var totalScores = JSON.parse(localStorage.getItem("totalScores"));


// shows players scores against their initials
function showHighscores () {
    document.querySelector(".player-list").textContent = playerInitials + ' - ' + totalScores;
}

showHighscores()


//clears player score info from the screen
clearButton.addEventListener('click', clearHighscores);

function clearHighscores() {
    document.querySelector(".player-list").textContent = " ";
    list.classList.add('hide');

}

// returns player back to the start of the quiz
backButton.addEventListener('click', backToQuiz);

function backToQuiz() {
    
}