const quizData = [
    {
        question: "Consumption of a high amount of which of the following may cause cirrhosis ?",
        a: "Alcohol",
        b: "Tobacco",
        c: "caffeine",
        d: "soft drinks",
        correct: "a",
    },
    {
        question: "Japanese encephalitis is a disease caused by __ ?",
        a: "Virus",
        b: "Protozoa",
        c: "Bacteria",
        d: "Fungi",
        correct: "a",
    },
    {
        question: "In which of the following, the cellular power plants – Mitochondria are absent ?",
        a: "Red Algae",
        b: "Green Algae",
        c: "Bacteria",
        d: "Brown Algae",
        correct: "c",
    },
    {
        question: "Which of the following is correct about Potassium sodium tartrate tetrahydrate?",
        a: " It is also known as Globular’s salt",
        b: "1995It is known to exhibit piezoelectricity",
        c: "Both a and b",
        d: "none of the above",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})