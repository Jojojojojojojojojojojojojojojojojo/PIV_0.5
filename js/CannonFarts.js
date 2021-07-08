class CannonFarts {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.angle = angle;
      this.width = width;
      this.height = height;
    
    }
    display() {
      push();
      translate(this.x, this.y);
      fill("#676e6a");
      rotate(this.angle);
      rect(-10, -20, this.width, this.height);
      pop();
      arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
      noFill();
    }
  }
