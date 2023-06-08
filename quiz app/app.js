const quizData = [
    {
        question: "Çanakkale Savaşı hangisinin bir cephesidir?",
        a: "1.Dünya Savaşı",
        b: "2.Dünya Savaşı",
        c: "Mohaç Muharebesi",
        d: "Preveze Denizler Savaşı",
        correct: "a",
    },
    {
        question: "Perşembe hangi ilimizin ilçesidir?",
        a: "Ordu",
        b: "Samsun",
        c: "Sinop",
        d: "Düzce",
        correct: "a",
    },
    {
        question: "Ünlü NBA yıldızı Michael Jordan kaç numaralı formayı giymiştir?",
        a: "33",
        b: "23",
        c: "43",
        d: "53",
        correct: "a",
    },
    {
        question: "Felsefenin Sefaleti adlı eser kime aittir?",
        a: "Karl Marx",
        b: "Friedrich Nietzsche",
        c: "Farabi",
        d: "Gazali",
        correct: "a",
    },
];
const quiz = document.getElementById('quiz')
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
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>Doğru Sayısı: ${score}/${quizData.length} </h2>
           <button onclick="location.reload()">Tekrar Çöz</button>
           `
        }
    }
})