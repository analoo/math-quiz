
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
var time = 60;
var score = 0;
var userAnswers = [];
var correct;
var scoresList = [];

if(JSON.parse(localStorage.getItem("highScores"))==null){
    localStorage.setItem("highScores", JSON.stringify(scoresList));
}

else{
    scoresList = JSON.parse(localStorage.getItem("highScores"))
}

renderScores();


// Officially starts the game
startEl.addEventListener("click", function () {
    event.preventDefault();

    // hides and shows some page values
    startEl.style.display = "none";
    challengeEl.style.display = "none";
    document.querySelector("#leader-list").style.display = "none";
    timerBoxEl.style.display = "inline";
    mainEl.style.display = "inline";


    startTimer(time);
    questionGenerator();

})
function startTimer() {
    var timeRemaining = setInterval(function () {
        timerEl.textContent = (time - 1);
        time--;

        if (time <= 0) {
            clearInterval(timeRemaining);
            mainEl.style.display = "none";
            gameOver();
        }
    }, 1000)

}

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

    questionEl.textContent = q;
    buttonsArray[1].textContent = options[0];
    buttonsArray[2].textContent = options[1];
    buttonsArray[3].textContent = options[2];
    buttonsArray[4].textContent = options[3];
    correct = answerIndex;
}

answersEl.addEventListener("click", function checkAnswers(event) {
    event.preventDefault();
    var answer = event.target.id;
    if (correct == answer.charAt(1)){
        score +=1
        outcomeEl.textContent = "Correct!"
    }

    else{
        time -=5;
        outcomeEl.textContent = "Wrong"

    }
    questionGenerator();

});


function gameOver(){
    document.querySelector("#leaderboard").style.display = "inline";
    timerBoxEl.style.display = "none";
    challengeEl.style.display = "inline";
    challengeEl.textContent = "GAME OVER. Your final scores is: " + score;
    submitEl.addEventListener("click", function(event){
        event.preventDefault();
        var initials = nameSpan.value;
        nameSpan.value = "";
        storeScore(initials)
    })
}

function storeScore(name){
    scoresList.push({"name": name, "score": score});
    localStorage.setItem("highScores", JSON.stringify(scoresList));
    clearScoreDispay();
    renderScores();
}

function clearScoreDispay(){
    var trEl = document.querySelector("tbody")
    trEl.innerHTML ='';
}

function renderScores(){ 
    document.querySelector("#leader-list").style.display = "inline";
    for(let i = 0; i < scoresList.length; i++){
        var tbodyEl = document.querySelector("tbody")
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

console.log("7:11")


