
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



var question = 0;
var questionBank = [
    {
        q: "Which direction is this person facing?",
        a: ["Backward", "To the left", "To the right", "What person?"],
        correct: 2,
        url: "https://i.picsum.photos/id/1025/4951/3301.jpg"
    },
    {
        q: "How old is this woman?",
        a: ["Backward", "To the left", "To the right", "What person?"],
        correct: 2, url: "https://i.picsum.photos/id/1025/4951/3301.jpg"
    },

    {
        q: "What is love?",
        a: ["Backward", "To the left", "To the right", "What person?"],
        correct: 2, url: "https://i.picsum.photos/id/1025/4951/3301.jpg"
    },

]

// To start the game

startEl.addEventListener("click", function () {
    event.preventDefault();
    displayQuestions()
    document.querySelector("#starter").style.display = "none";
})




answersEl.addEventListener("click", function (event) {
        event.preventDefault();
        var answer = event.target.id;
        console.log(answer);
    });

    

function displayQuestions() {
    
    var questionDisp = setInterval(function () {
        questionEl.textContent = questionBank[question].q;
        a0El.textContent = questionBank[question].a[0];
        a1El.textContent = questionBank[question].a[1];
        a2El.textContent = questionBank[question].a[2];
        a3El.textContent = questionBank[question].a[3];
        mainEl.style.display = "inline";
        question++

        if (question == questionBank.length) {
            clearInterval(questionDisp);
        }


    }, 1000);

}


// // function displayQs(questionBank) {
// //     question.textContent = questionBank[question].q;
// //     answers0.textContent = questionBank[question].a[0];
// //     answers1.textContent = questionBank[question].a[1];
// //     answers2.textContent = questionBank[question].a[2];
// //     answers3.textContent = questionBank[question].a[3];

// // }