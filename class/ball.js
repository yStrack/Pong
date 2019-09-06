class Ball {
  constructor() {
    this.posX = sizeX / 2 + 2;
    this.posY = sizeY / 2;
    this.vx = -3;
    this.vy = 2;
  }

  show() {
    fill(252, 131, 2);
    ellipse(this.posX, this.posY, 15, 15);
  }

  reset() {
    if (random(0, 1) == 0) {
      this.vx *= -1;
    } else {
      this.vy *= -1;
    }
    this.posX = sizeX / 2 + 2;
    this.posY = sizeY / 2;
  }

  changeDirection() {
    this.vx *= -1;
  }

  move() {
    if (this.posY + 7 > sizeY) {
      this.vy *= -1;
    } else if (this.posY - 7 < 0) {
      this.vy *= -1;
    }
    this.posX += this.vx;
    this.posY += this.vy;
  }
}
