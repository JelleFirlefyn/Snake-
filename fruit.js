function _Fruit(){
  this.x;
  this.y;

  this.pickLocation =  function (){
    this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
  }

  this.draw = function() {
    ctx.fillStyle = "#f44336";
    ctx.fillRect(this.x, this.y, scale, scale);
  }
}
