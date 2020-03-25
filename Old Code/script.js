
// pull all important data elements from the page
var mainEl = document.querySelector("main");
var questionEl = document.querySelector("#question");
var imageEl = document.querySelector("#image");
var answersEl = document.querySelector("#answers");
var a0El = document.querySelector("#a0");
var a1El = document.querySelector("#a1");
var a2El = document.querySelector("#a2");
var a3El = document.querySelector("#a3");
var outcomeEl = document.querySelector("#outcome");
var startEl = document.querySelector("#start");
var timerEl = document.querySelector("#timer");



var question = 0;
var time = 100;
var score = 0;
var userAnswers = [];

// make a question generator that creates math problems.

var questionBank = [
    {
        q: "Which direction is this woman facing?",
        a: ["Backward", "To the left", "To the right", "What woman"],
        correct: a2,
        url: "https://i.picsum.photos/id/1014/6016/4000.jpg"
    },
    {
        q: "How old is this woman?",
        a: ["10 - 20 years old", "21 - 30 years old", "31 + years", "What woman?"],
        correct: a3,
        url: "https://i.picsum.photos/id/1025/4951/3301.jpg"
    },

    {
        q: "How many AC units are in this building??",
        a: ["Less than 3", "4 - 6", "7 - 10", "11+" ],
        correct: a0,
        url: "https://i.picsum.photos/id/1054/3079/1733.jpg"
    },

    {
        q: "How are these humans walking on clouds?",
        a: ["They are angels", "Photoshop", "It's a lake", "What humans?"],
        correct: a2,
        url: "https://i.picsum.photos/id/1056/3988/2720.jpg"
    },

    {
        q: "Strawberries are my favorite fruit",
        a: ["Backward", "To the left", "To the right", "What person?"],
        correct: a2,
        url: "https://i.picsum.photos/id/1080/6858/4574.jpg"
    },

    {
        q: "Which direction is this person facing?",
        a: ["Backward", "To the left", "To the right", "What person?"],
        correct: a2,
        url: "https://i.picsum.photos/id/1025/4951/3301.jpg"
    },

    {
        q: "Which direction is this person facing?",
        a: ["Backward", "To the left", "To the right", "What person?"],
        correct: a2,
        url: "https://i.picsum.photos/id/1025/4951/3301.jpg"
    },

    {
        q: "Which direction is this person facing?",
        a: ["Backward", "To the left", "To the right", "What person?"],
        correct: a2,
        url: "https://i.picsum.photos/id/1025/4951/3301.jpg"
    },

    {
        q: "Which direction is this person facing?",
        a: ["Backward", "To the left", "To the right", "What person?"],
        correct: a2,
        url: "https://i.picsum.photos/id/1025/4951/3301.jpg"
    },

    {
        q: "Which direction is this person facing?",
        a: ["Backward", "To the left", "To the right", "What person?"],
        correct: a2,
        url: "https://i.picsum.photos/id/1025/4951/3301.jpg"
    },


]

// To start the game

startEl.addEventListener("click", function () {
    event.preventDefault();
    document.querySelector("#start").style.display = "none";
    startTimer(time);
    mainEl.style.display = "inline";
    displayQuestions();

})


function startTimer() {
    var timeRemaining = setInterval(function () {
        timerEl.textContent = (time - 1);
        time--;
        console.log(time);

        if (time == 0) {
            clearInterval(timeRemaining);
            mainEl.style.display = "none";
            console.log("You failed!");

        }
    }, 1000)

}

answersEl.addEventListener("click", function (event) {
    event.preventDefault();
    var answer = event.target.id;
    checkAnswers(question,answer);
    console.log(checkAnswers);

    question++;
    displayQuestions();
    console.log(answer);
    console.log(question);

});


function displayQuestions() {
    imageEl.src = questionBank[question].url;
    questionEl.textContent = questionBank[question].q;
    a0El.textContent = questionBank[question].a[0];
    a1El.textContent = questionBank[question].a[1];
    a2El.textContent = questionBank[question].a[2];
    a3El.textContent = questionBank[question].a[3];
}

function checkAnswers(question, answer) {
    if (questionBank[question].correct == answer){
        score +=1
    }

    else if ( question.correct != answer){
        score -=1;
        time -=5;
    }

}

console.log(score);

