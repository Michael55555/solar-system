class Planet {
  constructor({ size, level, parent } = {}) {
    this.size = size || 100;
    this.a = Math.random() * Math.PI * 2;
    this.d = Math.random() * this.size * 5 + this.size * 2.5;
    this.v = (Math.random() - 0.5) * Math.PI * 0.05;
    this.parent = parent;
    this.x = parent
      ? Math.sin(this.a) * this.d + this.parent.x
      : innerWidth / 2;
    this.y = parent
      ? Math.cos(this.a) * this.d + this.parent.y
      : innerHeight / 2;

    this.level = level ?? 5;
    this.moons = [];

    console.log(level, this.level)
    if (this.level > 0) {
      this.moons = [
        new Planet({ size: this.size / 2, level: this.level - 1, parent: this }),
        new Planet({ size: this.size / 2, level: this.level - 1, parent: this }),
      ];
    }
  }

  render(ctx) {
    ctx.fillStyle = "aqua";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    this.moons.forEach((moon) => moon.render(ctx));
  }

  move() {
    this.a += this.v;
    this.x = this.parent
      ? Math.sin(this.a) * this.d + this.parent.x
      : innerWidth / 2;
    this.y = this.parent
      ? Math.cos(this.a) * this.d + this.parent.y
      : innerHeight / 2;

    this.moons.forEach((moon) => moon.move());
  }
}

export default Planet;
