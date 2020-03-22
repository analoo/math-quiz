var questionEl = document.querySelector("#question");
var imageEl = document.querySelector("#image");
var answersEl = document.querySelector("#answers");

var answers = [a0El, a1El, a2El, a3El];
var a0El = document.querySelector("#a0");
var a1El = document.querySelector("#a1");
var a2El = document.querySelector("#a2");
var a3El = document.querySelector("#a3");
var outcomeEl = document.querySelector("#outcome");

// User Selection
answersEl.addEventListener("click", function(event){
    event.preventDefault();
    var answer = event.target;
    console.log(answer);

})








// var question = 0;


// var questionBank = [
//     {
//         q: "Which direction is this person facing?",
//         a: ["Backward", "To the left", "To the right", "What person?"],
//         correct: 2, url: "https://i.picsum.photos/id/1025/4951/3301.jpg"
//     },
//     {
//         q: "How old is this woman?",
//         a: ["Backward", "To the left", "To the right", "What person?"],
//         correct: 2, url: "https://i.picsum.photos/id/1025/4951/3301.jpg"
//     },

//     {
//         q: "What is love?",
//         a: ["Backward", "To the left", "To the right", "What person?"],
//         correct: 2, url: "https://i.picsum.photos/id/1025/4951/3301.jpg"
//     },

// ]

// function displayQuestions() {setInterval ( function displayQs(questionBank) {
//     question.textContent = questionBank[question].q;
//     answers0.textContent = questionBank[question].a[0];
//     answers1.textContent = questionBank[question].a[1];
//     answers2.textContent = questionBank[question].a[2];
//     answers3.textContent = questionBank[question].a[3];
//     question++

// }, 3000);

// }

// displayQuestions();

// // function displayQs(questionBank) {
// //     question.textContent = questionBank[question].q;
// //     answers0.textContent = questionBank[question].a[0];
// //     answers1.textContent = questionBank[question].a[1];
// //     answers2.textContent = questionBank[question].a[2];
// //     answers3.textContent = questionBank[question].a[3];

// // }