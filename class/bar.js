class Bar {
  constructor(_x) {
    this.posX = _x;
    this.posY = sizeY / 2;
    this.speed = 5;
    this.curSpeed = 0;
  }

  show() {
    fill(2, 208, 244);
    rect(this.posX, this.posY, 15, 50);
  }

  moveUp() {
    this.curSpeed = -this.speed;
  }

  moveDown() {
    this.curSpeed = this.speed;
  }

  stop() {
    this.curSpeed = 0;
  }

  move() {
    this.posY += this.curSpeed;
    if (this.posY > sizeY - 65) {
      this.posY = sizeY - 65;
    } else if (this.posY < 5) {
      this.posY = 5;
    }
  }
}
