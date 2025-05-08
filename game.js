let score=JSON.parse(localStorage.getItem('Score')) ||{
  Wins:0,
  Losses:0,
  Ties:0
};
updateScore();

function resetScore() {
  const confirmReset = confirm('Are you sure you want to reset the score? 🤔');
  if (confirmReset) {
    score.Wins = 0;
    score.Losses = 0;
    score.Ties = 0;
    localStorage.removeItem('Score');
    updateScore();

    document.querySelector('.js-result').innerHTML = '';
    document.querySelector('.js-moves').innerHTML = '';
  }
}

function playGame(playerMove){
  computerMove=pickComputerMove();
  let result='';

  if (playerMove==='Snake'){
    if(computerMove==='Snake') {
    result='Tie 😐';
  }
  else if(computerMove==='Water') {
    result='You Win 😁';
  }
  else if(computerMove==='Gun'){
    result='You Lose 😭';
  }
  }

  else if (playerMove==='Water'){
    if (computerMove==='Snake'){
    result='You Lose 😭';
  }
  else if(computerMove==='Water'){
    result='Tie 😐';
  }
  else if(computerMove==='Gun'){
    result='You Win 😁';
  }
  }

  else if (playerMove==='Gun'){
  if (computerMove==='Snake'){
  result='You Win 😁';
  }
  else if(computerMove==='Water'){
    result='You Lose 😭';
  }
  else if(computerMove==='Gun'){
    result='Tie 😐';
  }
  }
  if(result==='You Win 😁'){
    score.Wins+=1;
  } 
  else if(result==='You Lose 😭'){
      score.Losses+=1;
    }
    else if(result==='Tie 😐'){
      score.Ties+=1;
    }

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You picked: <img src="emojis/${playerMove}.png" class="result-image">
    Computer picked: <img src="emojis/${computerMove}.png" class="result-image">`;
    
    localStorage.setItem('Score', JSON.stringify(score));
    updateScore();
  } 
  
  function updateScore(){
    document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
  }

  function pickComputerMove(){
  const randomNumber=Math.random();
  let computerMove='';
  if(randomNumber>0 && randomNumber<1/3){
  computerMove='Snake';
  }else if(randomNumber>=1/3 && randomNumber<3/4){
      computerMove='Water';
  }else if(randomNumber>=3/4 && randomNumber<1){
      computerMove='Gun';
  }
  return computerMove;
}
 