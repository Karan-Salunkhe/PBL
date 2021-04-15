//declare all variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;

//questions function so our getQuestion function later can get the right value from array

let questions = [{
    question: "A half-wave dipole is sometimes called:    ",
    
    choiceA: "a Marconi antenna",
    choiceB: "a Hertz antenna",
    choiceC: "a Yagi antenna",
    choiceD: "none of the above",
    correctAnswer: "B"
}, {
    question: "The radiation pattern of a half-wave dipole has the shape of a __",
    
    choiceA: "Doughnut",
    choiceB: "Sphere",
    choiceC: "Hemisphere",
    choiceD: "CircularCircular",
    correctAnswer: "A"
}, {
    question: "The end-to-end length of a half-wave dipole antenna is actually:",
    
    choiceA: "one wavelength",
    choiceB: "one half-wavelength",
    choiceC: "slightly longer than a half-wavelength",
    choiceD: "slightly shorter than a half-wavelength",
    correctAnswer: "B"
}, {
    question: "What does the beam width of an antenna tell us?",
    
    choiceA: "Signal strength",
    choiceB: " Signal power",
    choiceC: "Directivity",
    choiceD: "Degradation",
    correctAnswer: "A"
}, {
    question: "If a half-wave dipole operates at 300 MHz with λ = 0.5m & D0 = 1.643, what will be its effective area?",
    
    choiceA: "0.032 m2",
    choiceB: "0.047 m2",
    choiceC: "0.65 m2",
    choiceD: "0.99 m2",
    correctAnswer: "B"
}, {
    question: "A half-wave dipole at a frequency of 100 MHz has a length of meter.",
    
    choiceA: "100",
    choiceB: "3",
    choiceC: "1.5",
    choiceD: "0.75",
    correctAnswer: "C"
}, {
    question: "Which of the following antennas produce a vertical radiation pattern?",
    
    choiceA: "Dipole antenna",
    choiceB: "Yagi antenna",
    choiceC: "Marconi antenna",
    choiceD: "Hertz antenna",
    correctAnswer: "C"
}, {
    question: "What is the radiation pattern of an isotropic radiator?",
    
    choiceA: "Doughnut",
    choiceB: "Sphere",
    choiceC: "Hemisphere",
    choiceD: "Circular",
    correctAnswer: "B"
}, {
    question: " What is the impedance of the folded dipole antenna?",
    
    choiceA: "50Ω",
    choiceB: "100Ω",
    choiceC: "300Ω",
    choiceD: "20Ω",
    correctAnswer: "C"
}, {
    question: "If the path difference of two waves with single source traveling by different paths to arrive at the same point, is λ/2, what would be the phase difference between them?",
    
    choiceA: "β x (λ/2)",
    choiceB: "β / (λ/2",
    choiceC: "β + (λ/2)",
    choiceD: "β – (λ/2)",
    correctAnswer: "A"
}, ];


var questionIndex = 0;


// getQuestion function

function getQuestion() {

    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
    // quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}


// start quiz

function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}

// show score function

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> You scored " + score + " out of 10!</p>";

    if (score < 4) {
        scoreMessage.innerHTML = "<p>Not so good! Time for some revision.</p>";
    }
    else if (score < 8) {
        scoreMessage.innerHTML = "<p>Pretty good! But still room for improvement.</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Great work! You really know the concepts!!</p>"
    }
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}


//function to check if answer is correct

function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorrect! Option " + questions[questionIndex-1].correctAnswer +  " was the correct answer. </p>";
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Correct!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Incorrect!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
    }
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}
