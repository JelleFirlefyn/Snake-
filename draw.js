const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup(){
  snake = new _Snake();
  fruit = new _Fruit();
  fruit.pickLocation();

  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();

    if (snake.eat(fruit)){
      console.log("EATING " + snake.total);
      fruit.pickLocation();
    }

    snake.checkCollision();
    document.querySelector('.score')
      .innerText = "Score: " + snake.total;

  },250);
}());

window.addEventListener('keydown',((evt) => {
  const direction = evt.key.replace('Arrow','');
  snake.changeDirection(direction);
}))
