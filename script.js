const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const questionEl = document.getElementById('question');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');


let currentQuiz = 0 ;
let totalScore= 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers()
    const currentQuestion = quizData[currentQuiz]
    console.log(currentQuestion.question);
    questionEl.innerText = currentQuestion.question;
    a_text.innerText = currentQuestion.a;
    b_text.innerText = currentQuestion.b;
    c_text.innerText = currentQuestion.c;
    d_text.innerText = currentQuestion.d;
    const quiz = document.getElementById("quiz");
}
submitBtn.addEventListener('click', Nextquestion);

/*below function to get the selected radio button value by checking all radio values*/

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEL) => {
        if(answerEL.checked){
                answer =answerEL.id;
        }

    });
       return answer;
}

//for deselcting answer before loading a question as by default it showing some answer

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
//Important function to check answer and load next question
function Nextquestion(){

    const answer = getSelected();
    console.log(answer);
    if(answer){
        if(answer===quizData[currentQuiz].correct)
        {
            totalScore++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            quiz.innerHTML = `
                <h2>You answered correctly at ${totalScore}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
}