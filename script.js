// 1. Define the quiz questions and answers
const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c",
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "High Tech Modern Language",
        c: "Home Tool Markup Language",
        d: "Hyperlinks and Text Markup Logic",
        correct: "a",
    },
    {
        question: "What year was JavaScript first released?",
        a: "1995",
        b: "2000",
        c: "1989",
        d: "2005",
        correct: "a",
    },
];

// 2. Get DOM elements
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

// 3. Initial load function
loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// 4. Helper function to clear previous selection
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// 5. Function to get the selected answer ID (a, b, c, or d)
function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

// 6. Event listener for the submit button
submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        // Check if the selected answer is correct
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++; // Move to the next question

        // Check if there are more questions
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // End of the quiz: display the score
            quiz.innerHTML = `
                <h2>You finished! You scored ${score}/${quizData.length} questions correctly.</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});