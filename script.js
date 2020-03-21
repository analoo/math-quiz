var question = document.querySelector("#question");
var image = document.querySelector("#image");

var answers0 = document.querySelector("#a0");
var answers1 = document.querySelector("#a1");
var answers2 = document.querySelector("#a2");
var answers3 = document.querySelector("#a3");



var questionBank = [
    {
        q: "Which direction is this person facing?",
        a: ["Forward", "Backward", "To the left", "To the right"],
        correct: 3, url: "https://i.picsum.photos/id/1025/4951/3301.jpg"
    }

]

var i = 0;
image.setAttribute = ("src", "https://i.picsum.photos/id/1014/6016/4000.jpg");
question.textContent = questionBank[i].q;
answers0.textContent = questionBank[i].a[0];
answers1.textContent = questionBank[i].a[1];
answers2.textContent = questionBank[i].a[2];
answers3.textContent = questionBank[i].a[3];

// function questionDisplay() {
//     for (let i = 0; i < questionBank.length; i++) {
//         image.setAttribute = ("src", "'" + questionBank[i].a[4] + "'";
//         question.textContent = questionBank[i].q;
//         answers0.textContent = questionBank[i].a[0];
//         answers1.textContent = questionBank[i].a[1];
//         answers2.textContent = questionBank[i].a[2];
//         answers3.textContent = questionBank[i].a[3];
//     }
// }
