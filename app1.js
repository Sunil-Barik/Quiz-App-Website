const quizData = [
    {
        question: " In which one of the following states is “Gir forest” located?",
        a: "Maharashtra",
        b: "Rajasthan",
        c: "Haryana",
        d: " Gujarat",
        correct: "d",
    },
    {
        question: "Wild Ass Sanctuary is situated in which Indian state?",
        a: "Mizoram",
        b: "The Little Rann of kutch",
        c: "Nagaland",
        d: "None of these",
        correct: "b",
    },
    {
        question: "Which one of the below is not correctly matched?",
        a: "Sariska - Alwar",
        b: "Peench - Garhwal",
        c: "Valmiki - Hazaribagh",
        d: "Nagarjunasagar - Hazaribagh",
        correct: "c",
    },
    {
        question: "The forest in Sundarbans is also called?",
        a: "Scrub jungle",
        b: "Mangrove",
        c: "Deciduous forest",
        d: "none of the these",
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