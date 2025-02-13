let currentQuestion = 0;
const questions = [
    {
        question: "What’s my favorite color?",
        answers: { A: "Red", B: "Blue", C: "Pink" },
        correctAnswer: "C"
    },
    {
        question: "What’s my favorite dessert?",
        answers: { A: "Cake", B: "Ice Cream", C: "Chocolate" },
        correctAnswer: "C"
    },
    {
        question: "Do you love me?",
        answers: { A: "YAASSSS", B: "YESSSS I DOO BABY", C: "YESSS" },
        correctAnswer: "B"
    }
];

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    document.querySelectorAll(".answer-btn").forEach((button, index) => {
        const answerKey = Object.keys(q.answers)[index];
        button.innerText = `${answerKey}) ${q.answers[answerKey]}`;
    });
}

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    const resultMessage = document.querySelector(".result-message");

    if (answer === correctAnswer) {
        resultMessage.innerText = "You got it right! 💖";
        resultMessage.style.color = "green";
    } else {
        resultMessage.innerText = "Oops! Try again! 😘";
        resultMessage.style.color = "red";
    }

    resultMessage.style.opacity = 1;
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
            resultMessage.style.opacity = 0;
        } else {
            document.querySelector(".result-message").innerText = "You completed the game! ❤️";
            setTimeout(() => { window.location.href = "love-journey.html"; }, 2000);
        }
    }, 2000);
}

window.onload = loadQuestion;
