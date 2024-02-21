const questions = [
    {
        question: "What does API stand for?",
        answers: [
            { text: "Advanced Programming Interface", correct: false },
            { text: "Application Programming Interface", correct: true },
            { text: "Automated Program Installation", correct: false },
            { text: "Application Protocol Integration", correct: false }
        ]
    },
    {
        question: "What is the primary purpose of Git?",
        answers: [
            { text: " To create dynamic web applications", correct: false },
            { text: "To provide web hosting services", correct: false },
            { text: "To manage source code version control", correct: true },
            { text: "To write HTML code", correct: false }
        ]
    },
    {
        question: "What does IDE stand for in software development?",
        answers: [
            { text: "Integrated Development Environment", correct: true },
            { text: "Interactive Design Environment", correct: false },
            { text: "Interface Design Enhancement", correct: false },
            { text: "Internet Development Engine", correct: false }
        ]
    },
    {
        question: "Which protocol is used for secure communication over a computer network?",
        answers: [
            { text: "HTTP", correct: false },
            { text: "TCP", correct: false },
            { text: "FTP", correct: false },
            { text: "HTTPS", correct: true }
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();
