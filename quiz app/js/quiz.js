let questions = [
    {
        question: "which is the largest mosque of pakistan?",
        answers: [
            
                {text: " A : Faisal", correct : true},
                {text: " B : Badshahi", correct : false},
                {text: " C : Shah jahan", correct : false},
                {text: " D : Masjid mahabat khan", correct : false},
            
        ]
        
    },
    {
        
        question: "what is the capital of pakistan?",
        answers: [
            
                {text: " A : Lahore", correct : false},
                {text: " B : Islamabad", correct : true},
                {text: " C : Karachi", correct : false},
                {text: " D : Peshawar", correct : false},
            
        ]
        
    },
    {
        
        question: "what is the national language of pakistan?",
        answers: [
            
                {text: " A : Punjabi", correct : false},
                {text: " B : Sindhi", correct : false},
                {text: " C : Pashto", correct : false},
                {text: " D : Urdu", correct : true},
            
        ]
        
    },
    {
        
        question: "who was the first president of pakistan?",
        answers: [
            
                {text: " A : Quid e Azam", correct : false},
                {text: " B : liaqat Ali Khan", correct : false},
                {text: " C : Sikandar mirza", correct : true},
                {text: " D : Fatima jinnah", correct : false},
            
        ]
        
    },
    {
        
        question: "who is the national anmal of pakistan?",
        answers: [
            
                {text: " A : Markhor", correct : true},
                {text: " B : Elephant", correct : false},
                {text: " C : Snake", correct : false},
                {text: " D : Cat", correct : false},
            
        ]
        
    }
]

let questionElement = document.querySelector(".heading");
let styleButton = document.querySelector(".style-btn");
let NextButton = document.querySelector(".next");

let currentQIndex = 0;
let score = 0;

function startQ(){
    currentQIndex = 0;
    score = 0;

    NextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    reset();
    let currenQ = questions[currentQIndex];
    let Qno = currentQIndex + 1;
    questionElement.innerHTML = Qno + " . " + currenQ.question;
    
    currenQ.answers.forEach(answers =>{
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        styleButton.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function reset(){
    NextButton.style.display = "none";
    while(styleButton.firstChild){
        styleButton.removeChild(styleButton.firstChild);
    }
}

function selectAnswer(e){
 const selectbtn = e.target;
 const isCorrect = selectbtn.dataset.correct === "true";
 if(isCorrect){
    selectbtn.classList.add("correct");
    score++;
 }else {
     selectbtn.classList.add("incorrect");
 }
    Array.from(styleButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    NextButton.style.display = "block";
}
    function scores(){
        reset();
        questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
        NextButton.innerHTML = "Play Again";
        NextButton.style.display = "block";
    }
    function buttonclick(){
        currentQIndex++;
        if(currentQIndex < questions.length){
            showQuestion();
        }else {
            scores();
        }
    }

    NextButton.addEventListener("click", ()=>{
        if(currentQIndex < questions.length){
            buttonclick();
        }else {
            startQ();
        }
    });
startQ();