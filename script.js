const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click',start)








const questions=[
   {
       question: 'Javascript is an _______ language?',
       answers: [
           {text:'Object-Oriented', correct: true},
           {text:'Procedural', correct: false},
           {text:'Object-Based', correct: false},
           {text:'None of the above', correct: false},
       ]
      
       },
   
     {
       question: 'Which of the following keywords is used to define a variable in Javascript?',
       answers: [
           {text:'var', correct: false},
           {text:'let', correct: false},
           {text:'var and let', correct: true},
           {text:'none', correct: false},
       ]
       
     },
     {
       question: 'Which of the following methods is used to access HTML elements using Javascript?',
       answers:
       [
           {text:'getElementbyId()', correct: false},
           {text:'getElementbyClassName()', correct: false},
           {text:'getElementbyId() and getElementbyClassName()', correct: true},
           {text:'None of the above', correct: false},
       ] 
   },

     {
       question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
       answers:
       [
           {text:'Throws an error', correct: false},
           {text:'Ignores the statements', correct: true},
           {text:'Gives a warning', correct: false},
           {text:'None of the above', correct: false},
       ] }
]


