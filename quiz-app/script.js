

const quizQues = [
    {
        'que': 'Which one  is The markup language',
        'a': 'HTML',
        'b': 'PHP',
        'c': 'JAVA',
        'd': 'GOLANG',
        'correct': 'a'
    },
    {
        'que': 'Javascript is a language',
        'a': 'Styling',
        'b': 'Hyper',
        'c': 'Programming',
        'd': 'common',
        'correct': 'c'
    },
    {
        'que': 'What does CSS stand for',
        'a': 'Hypertext',
        'b': 'Cascading style',
        'c': 'Json Object',
        'd': 'C sharp',
        'correct': 'b'
    },
]


let index = 0;
let right = 0, wrong = 0;
const quesText = document.getElementById('quiz-ques')
const inputs = document.querySelectorAll('.options')

function loadQues() {
    if(index == quizQues.length){
        endQuiz()
    }
    reset()
    const data = quizQues[index];
    quesText.innerText = `${index + 1}) ` + data.que;
    inputs[0].nextElementSibling.innerText = data.a;
    inputs[1].nextElementSibling.innerText = data.b;
    inputs[2].nextElementSibling.innerText = data.c;
    inputs[3].nextElementSibling.innerText = data.d;

    //    console.log(data)
}


function submitQuiz() {
    const data = quizQues[index];
    const useranswer = CheckAnswers()
    //    console.log(useranswer)
    if (useranswer === data.correct) {
        right++
    } else {
        wrong++
    }
    index++
    loadQues()
    return;
}


function CheckAnswers() {
    let answer = ''
    inputs.forEach((input) => {
        if (input.checked) {
            answer = input.value
        }
    })
    return answer;
}

function reset(){
    inputs.forEach((input) => {
      return  input.checked = false
    })
}

function endQuiz(){
    document.getElementsByClassName('quiz-box')[0].innerHTML = `<h1> Thankyou for playing this quiz game. your score is ${right} / ${quizQues.length} </h1> `
}

loadQues()
