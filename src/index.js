import Planet from "./planet.js";

let ctx = null;
let planet = new Planet();
console.log(planet);
function init() {
  const canvas = document.querySelector("canvas");

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  ctx = canvas.getContext("2d");

  animate();
}

function move() {
planet.move();
}

function render() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  planet.render(ctx);
}

function animate() {
  setTimeout(() => requestAnimationFrame(animate), 1000 / 60);
  move();
  render();
}

onload = init;
