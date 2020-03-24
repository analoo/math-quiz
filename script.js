
// pull all important data elements from the page
var mainEl = document.querySelector("main");

var startEl = document.querySelector("#start");
var submitEl = document.querySelector("#submit");

var timerEl = document.querySelector("#timer");
var timerBoxEl = document.querySelector("#time-box")
var challengeEl = document.querySelector("#challenge")
var buttonsArray = document.querySelectorAll("button")
var nameSpan = document.querySelector("#initials");

var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var outcomeEl = document.querySelector("#outcome");

// ** Declare starting conditions ***
var question = 0;
var time = 20;
var score = 0;
var userAnswers = [];
var scoresList = [];
// JSON.parse(localStorage.getItem("highScores"))

var questionBank = [];

// creates start for the game
startEl.addEventListener("click", function () {
    event.preventDefault();
    startEl.style.display = "none";
    challengeEl.style.display = "none";
    timerBoxEl.style.display = "inline";
    questionGenerator();
    startTimer(time);
    mainEl.style.display = "inline";
    displayQuestions();
    scoresList = JSON.parse(localStorage.getItem("highScores"));
    console.log(scoresList)
    renderScores();

})
// make a question generator that creates math problems.

function questionGenerator(){
    var num1 = Math.floor(Math.random() * 50);
    var num2 = Math.floor(Math.random() * 25);
    var q = num1 + " + " + num2;
    var options = [];
    var answer = num1 + num2;
    var answerIndex;

    while (options.length < 4){
        var tempAns = num1 + Math.floor(Math.random() * Math.floor(25));
        if (options.indexOf(tempAns) === -1){
            options.push(tempAns);
        }
    }

    if (options.indexOf(answer) === -1){
        answerIndex = Math.floor(Math.random() * 4);
        options[answerIndex] = answer;

    }

    else if (options.indexOf(answer) > -1){
        answerIndex = options.indexOf(answer) ;
    }
    
    return {q: q, a: options, correct: answerIndex};

}

function startTimer() {
    var timeRemaining = setInterval(function () {
        timerEl.textContent = (time - 1);
        time--;
        console.log(time);

        if (time <= 0) {
            clearInterval(timeRemaining);
            mainEl.style.display = "none";
            console.log("You failed!");
            gameOver();
        }
    }, 1000)

}

function displayQuestions() {
    questionBank = questionGenerator();
     questionEl.textContent = questionBank.q;
     buttonsArray[1].textContent = questionBank.a[0];
     buttonsArray[2].textContent = questionBank.a[1];
     buttonsArray[3].textContent = questionBank.a[2];
     buttonsArray[4].textContent = questionBank.a[3];
 
 }

answersEl.addEventListener("click", function (event) {
    event.preventDefault();
    var answer = event.target.id;
    checkAnswers(answer);
    console.log(checkAnswers);

    question++;
    displayQuestions();
    console.log(answer);
    console.log(question);

});

function checkAnswers(answer) {
    if (questionBank.correct == answer.charAt(1)){
        score +=1
        outcomeEl.textContent = "Correct!"
    }

    else{
        time -=5;
        outcomeEl.textContent = "Wrong"

    }

}

function storeScore(name){
    scoresList.push({"name": name, "score": score});
    localStorage.setItem("highScores", JSON.stringify(scoresList));
}



function gameOver(){
    alert("Game over is starting")
    document.querySelector("#leaderboard").style.display = "inline";
    submitEl.addEventListener("click", function(event){
        event.preventDefault();
        var initials = nameSpan.value;
        storeScore(initials)
    })
    renderScores();


}

function renderScores(){ 
    for (let i = 0; i < scoresList.length; i++){
        var tbodyEl = document.querySelector("tbody");
        var tableRowEl = document.createElement("tr");
        var dataEl1 = document.createElement("td");
        var dataEl2 = document.createElement("td");
        dataEl1.textContent = scoresList[i].name;
        dataEl2.textContent = scoresList[i].score;
        tbodyEl.append(tableRowEl);
        tableRowEl.append(dataEl1);
        tableRowEl.append(dataEl2);
    }

}

