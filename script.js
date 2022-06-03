const _strtBtn = document.getElementById("start-btn");
const _nxtBtn = document.getElementById("next-btn");

const _qstContainerElement = document.getElementById("question-container");
const _qstElement = document.getElementById("question");
const _ansBtnElement = document.getElementById("answer-buttons");
var _timerObj = document.getElementById("time");

//let shuffledQuestions, _curIndex;
var _curIndex = 0;
let _quizScore = 0;
var _totalQuestions = questions.length;
var _time = _totalQuestions * 2;


_strtBtn.addEventListener("click", () => {
  if (_strtBtn.innerText == "Submit") {
    ShowScore();
  } else {
    start();
  }
});

_nxtBtn.addEventListener("click", () => {
  _curIndex++;
  navigate();
});
//when Submit is clicked hide questions section and show the score area
function ShowScore() {
 
  _qstContainerElement.setAttribute("class", "hide");
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");
  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = _quizScore;
}
//Timer callback
function TimerCallBack() {
  _time--;
  _timerObj.textContent = _time;
  //alert(_time)
  // check if user ran out of time
  if (_time <= 0) {
    //   alert('time is less than 0')
    //StopQuiz();
    clearInterval (_timerId); 
    quizEnd()
  }
  
 
}

//Start Function triggered by start click
function start() {
  //hide the start button
  _strtBtn.classList.add("hide");
  _curIndex = 0;
  _qstContainerElement.classList.remove("hide");
  //start timer
  //init the timer with callback
  _timerId = setInterval(TimerCallBack, 1000);
  
  //const _timerId = setInterval ((interval) => { time = this.time - 1; 
  

  //show starting time
  _timerObj.textContent = _time;

  //Logic to Show the question one by one
  navigate();

  _quizScore = 0;
}
//Triggered when the end of question or timer completes
function StopQuiz() {


  // alert('end of quiz')
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = _quizScore;
   _qstContainerElement.classList.remove("hide");

}

//Reset screen state and show the question one by one by curIndex
function navigate() {
  if (_curIndex > _totalQuestions) alert("calling stop quiz");
  //StopQuiz()

  resetState();
  // alert('before show quesion')
  showQuestion(questions[_curIndex]);
}
//Bind the Question collections data to user interface
function showQuestion(aQuestion) {
  _qstElement.innerText = aQuestion.question;
  aQuestion.answers.forEach((answer) => {
    const fBtn = document.createElement("button");
    fBtn.innerText = answer.text;
    fBtn.classList.add("btn");

    if (answer.correct) {
      fBtn.dataset.correct = answer.correct;
    } else {
      fBtn.dataset.correct = false;
    }
    // alert('hooking selectanser')
    fBtn.addEventListener("click", selectAnswer);
    _ansBtnElement.appendChild(fBtn);
  });
}
//hide and button state
function resetState() {
  clearStatusClass(document.body);
  _nxtBtn.classList.add("hide");
  while (_ansBtnElement.firstChild) {
    _ansBtnElement.removeChild(_ansBtnElement.firstChild);
  }
}

//when correct ansert is selected track the score and when reached the end of question
//show start button as Submit button
function selectAnswer(e) {
  const selectedButton = e.target;
  const bCorrect = selectedButton.dataset.correct;

  setStatusClass(document.body, bCorrect);

  Array.from(_ansBtnElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  if (_totalQuestions > _curIndex + 1) {
    _nxtBtn.classList.remove("hide");
  } else {
    _strtBtn.innerText = "Submit";
    _strtBtn.classList.remove("hide");
  }

  // alert('select buton check')
  alert(selectedButton.dataset.correct)
  if (selectedButton.dataset.correct==='true') {
    _quizScore++;
    alert(_quizScore)
  }

  document.getElementById("right-answers").innerText = _quizScore;
  //window.alert('end of select answer')
}

//color change logic---need to work on
function setStatusClass(element, correct) {
  // clearStatusClass(element)
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

//change the class of the element
function clearStatusClass(element) {
  // window.alert(element)
  // window.alert(element.classList)
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
