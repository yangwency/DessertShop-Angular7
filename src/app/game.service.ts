import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }
  canvas;

    canvasContext;

    ballX = 50;

    ballY = 50;

    ballSpeedX = 10;

    ballSpeedY = 4;

    player1Score = 0;

    player2Score = 0;

    WINNING_SCORE = 5;

    showingWinScreen = false;

    paddle1Y = 250;

    paddle2Y = 250;

    PADDLE_HEIGHT = 100;

    PADDLE_THICKNESS = 10;


    

     calculateMousePos(evt) {

      var rect = this.canvas.getBoundingClientRect();

      var root = document.documentElement;

      var mouseX = evt.clientX - rect.left - root.scrollLeft;

      var mouseY = evt.clientY - rect.top - root.scrollTop;

      return {

          x: mouseX,

          y: mouseY

      };

  }

   handleMouseClick(evt) {

    if (this.showingWinScreen) {

        this.player1Score = 0;

        this.player2Score = 0;

        this.showingWinScreen = false;

    }

}

onload = function () {

  this.canvas = document.getElementById('gameCanvas');

  this.canvasContext = this.canvas.getContext('2d');



  var framesPerSecond = 30;

  setInterval(function () {

    this.moveEverything();

    this.drawEverything();

  }, 1000 / framesPerSecond);



  this.canvas.addEventListener('mousedown', this.handleMouseClick);



  this.canvas.addEventListener('mousemove',

      function (evt) {

          var mousePos = this.calculateMousePos(evt);

          this.paddle1Y = mousePos.y - (this.PADDLE_HEIGHT / 2);

      });



}

ballReset() {

  if (this.player1Score >= this.WINNING_SCORE ||

      this.player2Score >= this.WINNING_SCORE) {

      this.player1Score = 0;

      this.player2Score = 0;

      this.showingWinScreen = true;

  }



  this.ballSpeedX = -this.ballSpeedX;

  this.ballX = this.canvas.width / 2;

  this.ballY = this.canvas.height / 2;

}



 computerMovement() {

  var paddle2YCenter = this.paddle2Y + (this.PADDLE_HEIGHT / 2);

  if (paddle2YCenter < this.ballY - 35) {

      this.paddle2Y += 6;

  } else if (paddle2YCenter > this.ballY + 35) {

      this.paddle2Y -= 6;

  }

}



 moveEverything() {

  if (this.showingWinScreen) {

      return;

  }



  this.computerMovement();



  this.ballX += this.ballSpeedX;

  this.ballY += this.ballSpeedY;



  if (this.ballX < 0) {

      if (this.ballY > this.paddle1Y &&

        this.ballY < this.paddle1Y + this.PADDLE_HEIGHT) {

          this.ballSpeedX = -this.ballSpeedX

          var deltaY = this.ballY

              - (this.paddle1Y + this.PADDLE_HEIGHT / 2);

              this.ballSpeedY = deltaY * 0.35;

      } else {

        this.player2Score++;

        this.ballReset();

      }

  }

  if (this.ballX > this.canvas.width) {

      if (this.ballY > this.paddle2Y &&

        this.ballY < this.paddle2Y + this.PADDLE_HEIGHT) {

          this.ballSpeedX = -this.ballSpeedX



          var deltaY = this.ballY

              - (this.paddle2Y + this.PADDLE_HEIGHT / 2);

              this.ballSpeedY = deltaY * 0.35;

      } else {

        this.player1Score++;

        this.ballReset();

      }

  }

  if (this.ballY < 0) {

    this.ballSpeedY = -this.ballSpeedY;

  }

  if (this.ballY > this.canvas.height) {

    this.ballSpeedY = -this.ballSpeedY;

  }

}



drawEverything() {

  // next line blanks out screen with black

  this.colorRect(0, 0, this.canvas.width, this.canvas.height, 'black');



  if (this.showingWinScreen) {

    this.canvasContext.fillStyle = 'white';
      if (this.player1Score >= this.WINNING_SCORE) {
        this.canvasContext.fillText("Lest Player Won!", 350, 200);
      } else if (this.player2Score >= this.WINNING_SCORE) {
        this.canvasContext.fillText("Right Player Won!", 350, 200);
      }


      this.canvasContext.fillText("Click to continue", 350, 300);

      return;

  }



  // this is left player paddle

  this.colorRect(0, this.paddle1Y, this.PADDLE_THICKNESS, this.PADDLE_HEIGHT, 'white');



  // this is right computer paddle

  this.colorRect(this.canvas.width - this.PADDLE_THICKNESS, this.paddle2Y, this.PADDLE_THICKNESS, this.PADDLE_HEIGHT, 'white');



  // next line draws the ball

  this.colorCircle(this.ballX, this.ballY, 10, 'white');



  this.canvasContext.fillText(this.player1Score, 100, 100);

  this.canvasContext.fillText(this.player2Score, this.canvas.width - 100, 100);

}



colorCircle(centerX, centerY, radius, drawColor) {

  this.canvasContext.fillStyle = drawColor;

  this.canvasContext.beginPath();

  this.canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);

  this.canvasContext.fill();

}



colorRect(leftX, topY, width, height, drawColor) {

  this.canvasContext.fillStyle = drawColor;

  this.canvasContext.fillRect(leftX, topY, width, height);

}



}
