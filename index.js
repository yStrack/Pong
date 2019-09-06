let sizeX = 700, // x canvas size
  sizeY = 400; // y canvas size
let b1, b2, ball;
let score1 = 0, //score1 => score of player 1(left)
  score2 = 0; //score2 => score of player 2(right)
let init = true,
  start = false;
let hitSound = new Audio("./data/Beep8.mp3");

function setup() {
  createCanvas(sizeX, sizeY);
  noStroke();
  b1 = new Bar(15);
  b2 = new Bar(sizeX - 30);
  ball = new Ball();
}

function keyPressed() {
  //Starts ball moviment
  if (key == " ") {
    start = true;
    init = false;
  }
  //Left bar controls
  if (key == "w") {
    b1.moveUp();
  } else if (key == "s") {
    b1.moveDown();
  }
  //Right bar controls
  if (keyCode == UP_ARROW) {
    b2.moveUp();
  } else if (keyCode == DOWN_ARROW) {
    b2.moveDown();
  }
}

function keyReleased() {
  //Left bar controls
  if (key == "w" || key == "s") {
    b1.stop();
  }
  //Right bar controls
  if (keyCode == UP_ARROW || keyCode == DOWN_ARROW) {
    b2.stop();
  }
}

function collision(ball, b1, b2) {
  if (
    ball.posX - (15 + 7) < b1.posX &&
    (ball.posY < b1.posY + 50 && ball.posY + 7 > b1.posY)
  ) {
    return 0;
  } else if (
    ball.posX + 7 > b2.posX &&
    (ball.posY < b2.posY + 50 && ball.posY + 7 > b2.posY)
  ) {
    return 0;
  }
  if (ball.posX - (15 + 7) < b1.posX) {
    if (ball.posY > b1.posY + 50 || ball.posY + 7 < b1.posY) {
      return 2;
    }
  }
  if (ball.posX + 7 > b2.posX) {
    if (ball.posY > b2.posY + 50 || ball.posY + 7 < b2.posY) {
      return 1;
    }
  }
  return 3;
}

function draw() {
  //Board
  background(53);
  fill(255);
  rect(sizeX / 2, 0, 5, sizeY);
  for (i = 10; i < sizeY; i += 15) {
    fill(53);
    rect(sizeX / 2, i, 5, 7);
  }
  //Start message
  if (init) {
    fill(247, 4, 93);
    textSize(30);
    text("Press space bar to begin", sizeX / 2 - 170, sizeY / 2 + 100);
  }

  //Scores
  fill(255);
  textSize(45);
  text(score1, sizeX / 2 - 110, 65);

  fill(255);
  textSize(45);
  text(score2, sizeX / 2 + 100, 65);

  //Objects
  b1.show();
  b2.show();
  ball.show();
  b1.move();
  b2.move();

  if (start == true) {
    ball.move();
  }

  if (collision(ball, b1, b2) == 0) {
    hitSound.play();
    ball.changeDirection();
  }
  //if left player scores
  if (collision(ball, b1, b2) == 1) {
    score1++;
    ball.reset();
    start = false;
    //init = true;
  }
  //if right player scores
  else if (collision(ball, b1, b2) == 2) {
    score2++;
    ball.reset();
    start = false;
    //init = true;
  }
}
