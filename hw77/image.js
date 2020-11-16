(function () {
  'use strict';

  const canvas = document.getElementById('theCanvas');
  const context = canvas.getContext('2d');

  function resizeCanvas() {
    let extraWidth = window.innerWidth % 64;
    let extraHeight = window.innerHeight % 64;
    canvas.width = window.innerWidth - extraWidth;
    canvas.height = window.innerHeight - extraHeight;
    console.log(canvas.height);
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  let appleImg;
  let APPLE_SIZE;
  let appleX;
  let appleY;
  let score = 0;
  let gameOn;
  //const img = document.getElementById('snakeHead');
  const img = new Image();
  img.src = 'images/snakehead.png';
  img.addEventListener('load', () => {
    const SNAKE_SIZE = 64;
    let direction = 'ArrowRight';
    let snakeX = 0;
    let snakeY = 0;
    

    const gameOver = 'GAME OVER';
    gameOn = setInterval(() => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(appleImg, appleX, appleY, APPLE_SIZE, APPLE_SIZE);
      context.drawImage(img, snakeX, snakeY, SNAKE_SIZE, SNAKE_SIZE);

      context.font = 'bold 48px serif';
      context.fillText(score, canvas.width - 120, 50);


      switch (direction) {
        case 'ArrowLeft':
          snakeX -= SNAKE_SIZE;
          break;
        case 'ArrowRight':
          snakeX += SNAKE_SIZE;
          break;
        case 'ArrowUp':
          snakeY -= SNAKE_SIZE;
          break;
        case 'ArrowDown':
          snakeY += SNAKE_SIZE;
          break;
      }

      if (snakeX < 0 || snakeX > canvas.width - SNAKE_SIZE) {
        clearInterval(gameOn);
        context.fillText(gameOver, canvas.width / 2, 150);
        console.log('crashed');
      }
      if (snakeY < 0 || snakeY > canvas.height - SNAKE_SIZE) {
        clearInterval(gameOn);
        context.fillText(gameOver, canvas.width / 2 - 100, canvas.height / 2);
        console.log('crashed');
      }

      if(snakeX === appleX && snakeY === appleY){
        score += 10;
        updateApple();
        console.log('even');
      }
    }, 500);

    document.addEventListener('keydown', e => {
      //console.log(e);
      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          direction = e.key;
      }
    });
  });


  appleImg = new Image();
  appleImg.src = 'images/apple.png';

  appleImg.addEventListener('load', () => {
    APPLE_SIZE = 64;
    let x = getRandomNumber(0, canvas.width);
    let y = getRandomNumber(0, canvas.height);
    let extraX = x % 64;
    let extraY = y % 64;
    appleX = x - extraX;
    appleY = y - extraY;
    context.drawImage(appleImg, appleX, appleY, APPLE_SIZE, APPLE_SIZE);
  });

  function updateApple(){
    let x = getRandomNumber(0, canvas.width);
    let y = getRandomNumber(0, canvas.height);
    let extraX = x % 64;
    let extraY = y % 64;
    appleX = x - extraX;
    appleY = y - extraY;
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}());