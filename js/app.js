
 const questionNumber = document.querySelector(".question-number");
 const questionText = document.querySelector(".question-text");
 const optionContainer = document.querySelector(".option-container");
 const answersIndicatorContainer = document.querySelector(".answers-indicator");
 const homeBox = document.querySelector(".home-box");
 const quizBox = document.querySelector(".quiz-box");
 const resultBox = document.querySelector(".result-box");
 const questionLimit = quiz.length;
 let questionCounter = 0;
 let currentQuestion;
 let availableQuestions = [];
 let availableOptions = [];
 let correctAnswers = 0;
 let attempt = 0;
 let timerInterval = null;
 let timeLeft = 0;
 const QUESTION_TIME = 45;

 function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0; i<totalQuestion; i++){
       availableQuestions.push(quiz[i]);
    }
 }

 function getNewQuestion(){
    clearTimer();

    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + questionLimit;

    const progress = ((questionCounter) / questionLimit) * 100;
    document.querySelector(".progress-bar-fill").style.width = progress + "%";

    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    const index1 = availableQuestions.indexOf(questionIndex);
    availableQuestions.splice(index1, 1);

    if(currentQuestion.hasOwnProperty("img")){
       const img = document.createElement("img");
       img.src = currentQuestion.img;
       questionText.appendChild(img);
    }

    const optionLen = currentQuestion.options.length;
    for(let i=0; i<optionLen; i++){
       availableOptions.push(i);
    }
    optionContainer.innerHTML = '';
    let animationDelay = 0.15;
    for(let i=0; i<optionLen; i++){
       const optonIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
       const index2 = availableOptions.indexOf(optonIndex);
       availableOptions.splice(index2, 1);
       const option = document.createElement("div");
       option.innerHTML = currentQuestion.options[optonIndex];
       option.id = optonIndex;
       option.style.animationDelay = animationDelay + 's';
       animationDelay = animationDelay + 0.15;
       option.className = "option";
       optionContainer.appendChild(option);
       option.setAttribute("onclick", "getResult(this)");
    }

    questionCounter++;
    startTimer();
 }

 function startTimer(){
    timeLeft = QUESTION_TIME;
    updateTimerDisplay();
    timerInterval = setInterval(function(){
       timeLeft--;
       updateTimerDisplay();
       if(timeLeft <= 0){
          clearTimer();
          timeUp();
       }
    }, 1000);
 }

 function clearTimer(){
    if(timerInterval){
       clearInterval(timerInterval);
       timerInterval = null;
    }
 }

 function updateTimerDisplay(){
    const timerEl = document.querySelector(".timer-count");
    if(timerEl){
       timerEl.innerHTML = timeLeft + "s";
       if(timeLeft <= 10){
          timerEl.style.color = "#e74c3c";
       } else {
          timerEl.style.color = "#009688";
       }
    }
 }

 function timeUp(){
    updateAnswerIndicator("skipped");
    lockAllOptions();
 }

 // get the result of current attempt question
 function getResult(element){
    const id = parseInt(element.id);
    if(id === currentQuestion.answer){
       // CORRECT — stop timer, highlight green, lock all options
       clearTimer();
       element.classList.add("correct");
       updateAnswerIndicator("correct");
       correctAnswers++;
       attempt++;
       lockAllOptions();
    } else {
       // WRONG — disable only this option, let user keep trying
       element.classList.add("wrong");
       element.classList.add("already-answered");
       updateAnswerIndicator("wrong");
       attempt++;
    }
 }

 // lock every option (called after correct answer or time up)
 function lockAllOptions(){
    const optionLen = optionContainer.children.length;
    for(let i=0; i<optionLen; i++){
       optionContainer.children[i].classList.add("already-answered");
    }
 }

 function answersIndicator(){
    answersIndicatorContainer.innerHTML = '';
    const totalQuestion = questionLimit;
    for(let i=0; i<totalQuestion; i++){
       const indicator = document.createElement("div");
       answersIndicatorContainer.appendChild(indicator);
    }
 }

 function updateAnswerIndicator(markType){
    answersIndicatorContainer.children[questionCounter-1].classList.add(markType);
 }

 function next(){
    if(questionCounter === questionLimit){
       quizOver();
    } else {
       getNewQuestion();
    }
 }

 function finish(){
    clearTimer();
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    quizResult();
 }

 function quizOver(){
    clearTimer();
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    quizResult();
 }

 function quizResult(){
    const percentage = (correctAnswers / questionLimit) * 100;
    resultBox.querySelector(".total-question").innerHTML = questionLimit;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + questionLimit;

    let feedback = '';
    let feedbackClass = '';
    if(percentage >= 80){
       feedback = "🏆 Excellent! You have a strong knowledge of brewing & distilling!";
       feedbackClass = "feedback-excellent";
    } else if(percentage >= 60){
       feedback = "👍 Good effort! Keep studying the IBD materials to improve further.";
       feedbackClass = "feedback-good";
    } else if(percentage >= 40){
       feedback = "📚 Keep going! Review the IBD course materials and try again.";
       feedbackClass = "feedback-average";
    } else {
       feedback = "💪 Don't give up! More practice will help you master the content.";
       feedbackClass = "feedback-poor";
    }
    const feedbackEl = resultBox.querySelector(".result-feedback");
    feedbackEl.innerHTML = feedback;
    feedbackEl.className = "result-feedback " + feedbackClass;
 }

 function resetQuiz(){
    questionCounter = 0;
    correctAnswers = 0;
    attempt = 0;
    availableQuestions = [];
    clearTimer();
 }

 function tryAgainQuiz(){
    resultBox.classList.add("hide");
    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();
 }

 function goToHome(){
    resultBox.classList.add("hide");
    homeBox.classList.remove("hide");
    resetQuiz();
 }

 function startQuiz(){
    homeBox.classList.add("hide");
    quizBox.classList.remove("hide");
    setAvailableQuestions();
    getNewQuestion();
    answersIndicator();
 }

 window.onload = function(){
    homeBox.querySelector(".total-question").innerHTML = questionLimit;
 }
