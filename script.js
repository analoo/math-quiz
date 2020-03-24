
// pull all important data elements from the page
var mainEl = document.querySelector("main");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var a0El = document.querySelector("#a0");
var a1El = document.querySelector("#a1");
var a2El = document.querySelector("#a2");
var a3El = document.querySelector("#a3");
var outcomeEl = document.querySelector("#outcome");
var startEl = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var timerBoxEl = document.querySelector("#time-box")
var challengeEl = document.querySelector("#challenge")





var question = 0;
var time = 10;
var score = 0;
var userAnswers = [];
var scores = [{Ana: 100}, {Mark: 250}]
var questionBank = []

// make a question generator that creates math problems.

function questionGenerator(){
    var num1 = Math.floor(Math.random() * 50);
    var num2 = Math.floor(Math.random() * 25);
    var q = num1 + " + " + num2;
    var options = [];
    var answer = num1 + num2;
    var answerIndex
    // options.push(answer);

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
    
    questionBank.push({q: q, a: options, correct: answerIndex})

}

startEl.addEventListener("click", function () {
    event.preventDefault();
    startEl.style.display = "none";
    challengeEl.style.display = "none";
    timerBoxEl.style.display = "inline";
    questionGenerator();
    console.log("The question bank has: " + questionBank)
    startTimer(time);
    mainEl.style.display = "inline";
    displayQuestions();

})


function startTimer() {
    var timeRemaining = setInterval(function () {
        timerEl.textContent = (time - 1);
        time--;
        console.log(time);

        if (time <= 0) {
            clearInterval(timeRemaining);
            mainEl.style.display = "none";
            console.log("You failed!");
            storeScore();

        }
    }, 1000)

}

answersEl.addEventListener("click", function (event) {
    event.preventDefault();
    questionGenerator();
    var answer = event.target.id;
    checkAnswers(question,answer);
    console.log(checkAnswers);

    question++;
    displayQuestions();
    console.log(answer);
    console.log(question);

});


function displayQuestions() {
    questionEl.textContent = questionBank[question].q;
    a0El.textContent = questionBank[question].a[0];
    a1El.textContent = questionBank[question].a[1];
    a2El.textContent = questionBank[question].a[2];
    a3El.textContent = questionBank[question].a[3];
}

function checkAnswers(question, answer) {
    console.log(answer.charAt(1));
    if (questionBank[question].correct == answer.charAt(1)){
        score +=1
        outcomeEl.textContent = "Correct!"
    }

    else if (question.correct != answer){
        time -=5;
        outcomeEl.textContent = "Wrong"

    }

}

function storeScore(){
    localStorage.setItem("highScores", score);
}
console.log(score);

