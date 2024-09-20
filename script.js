const quizData = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        correct: 1
    },
    {
        question: "Which is the national animal of India?",
        options: ["Lion", "Elephant", "Tiger", "Peacock"],
        correct: 2
    },
    {
        question: "Who wrote the national anthem of India?",
        options: ["Rabindranath Tagore", "Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru"],
        correct: 0
    },
    {
        question: "Which is the longest river in India?",
        options: ["Ganges", "Yamuna", "Godavari", "Brahmaputra"],
        correct: 0
    },
    {
        question: "In which year did India gain independence?",
        options: ["1945", "1946", "1947", "1948"],
        correct: 2
    },
    {
        question: "Which city is known as the Pink City of India?",
        options: ["Jaipur", "Udaipur", "Jodhpur", "Agra"],
        correct: 0
    },
    {
        question: "Who is known as the Father of the Indian Nation?",
        options: ["Subhas Chandra Bose", "Mahatma Gandhi", "Sardar Patel", "Jawaharlal Nehru"],
        correct: 1
    },
    {
        question: "Which Indian festival is known as the festival of lights?",
        options: ["Holi", "Dussehra", "Diwali", "Pongal"],
        correct: 2
    },
    {
        question: "What is the national flower of India?",
        options: ["Rose", "Lotus", "Sunflower", "Marigold"],
        correct: 1
    },
    {
        question: "Which monument is known as the symbol of love?",
        options: ["Red Fort", "Qutub Minar", "Taj Mahal", "India Gate"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const quizOptionsElement = document.getElementById("quiz-options");
const nextButton = document.getElementById("next-btn");
const resultsElement = document.getElementById("results");
const scoreElement = document.getElementById("score-value");
const quizElement = document.getElementById("quiz");
const restartButton = document.getElementById("restart-btn");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    quizOptionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => selectOption(index);
        quizOptionsElement.appendChild(button);
    });
}

function selectOption(selectedOptionIndex) {
    const correctOptionIndex = quizData[currentQuestionIndex].correct;
    if (selectedOptionIndex === correctOptionIndex) {
        score++;
    }

    document.querySelectorAll(".option").forEach((button, index) => {
        button.disabled = true;
        if (index === correctOptionIndex) {
            button.style.backgroundColor = "#28a745"; // Green for correct answer
        } else if (index === selectedOptionIndex) {
            button.style.backgroundColor = "#ff7f50"; // Coral color for incorrect answer
        }
    });
}

function showResults() {
    quizElement.classList.add("hidden");
    resultsElement.classList.remove("hidden");
    scoreElement.textContent = score;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizElement.classList.remove("hidden");
    resultsElement.classList.add("hidden");
    loadQuestion();
}

loadQuestion();

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);
