'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='correct number'
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.score').textContent='10'
// console.log(document.querySelector('.score').textContent='11');

// document.querySelector('.number').textContent=10;

// document.querySelector('.guess').value=20
// console.log(document.querySelector('.guess').value);

//adding event listener and event handler
//secrete number

let secreteNumber=Math.trunc(Math.random()*20+1)
let highscore=0

let score=20

function displayMessage(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener(
    'click', function(){
const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
    if(!guess){
        displayMessage('no number')

    }

    else if(guess===secreteNumber){
        document.querySelector('.number').textContent=secreteNumber;
        displayMessage('correct Number')
 document.querySelector('body').style.backgroundColor='#60b347'
 document.querySelector('.number').style.width='30rem'
 
 if(score>highscore){
     highscore= score
     document.querySelector('.highscore').textContent=highscore
 }
    }
    else if(guess!==secreteNumber){
        displayMessage(guess>secreteNumber?'too high':'too low')
        
        if(score>1){
        score--;       
        document.querySelector('.score').textContent=score
        }
        else {
            displayMessage('you loose')
            document.querySelector('.score').textContent=0
        }
    }
    
})


document.querySelector('.again').addEventListener('click', function(){

    displayMessage('Start guessing...')
    score=20    
secreteNumber=Math.trunc(Math.random()*20+1)
    document.querySelector('.score').textContent=score
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.number').style.width='15rem'
    document.querySelector('.number').textContent='?'
    document.querySelector('.guess').value=""


   


})

 