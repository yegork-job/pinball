(function(){
  'use strict';
  /*jshint validthis: true*/

  window.addEventListener('load', wndLoad);
  function wndLoad() {
    window.Ball = Ball;

    function Ball(field) {
      this.elem = window.Snap('#ball');
      var ballBBox = this.elem.getBBox();
      console.log(ballBBox);
      this.bBox = ballBBox;
      this.field = field;
      this.x = ballBBox.cx;
      this.y = ballBBox.cy;
      this.r = ballBBox.r1;
      this.vx = 5;
      this.vy = 2;
    }
    Ball.prototype.move = move;
    Ball.prototype.draw = draw;

    function move() {
      this.x += this.vx;
      if (this.x + this.r > this.field.width) {
        this.x = this.field.width - this.r;
        this.vx *= -1;
      }
      if (this.x - this.r < this.field.left) {
        this.x = this.field.left + this.r;
        this.vx *= -1;
      }
      this.y += this.vy;
      if (this.y + this.r > this.field.height) {
        this.y = this.field.height - this.r;
        this.vy *= -1;
      }
      if (this.y - this.r < this.field.top) {
        this.y = this.field.top + this.r;
        this.vy *= -1;
      }
      this.draw();
    }
    function draw() {
      var matr = new window.Snap.Matrix();
      this.elem.animate({transform: matr.translate(this.x - this.bBox.cx, this.y - this.bBox.cy)}, 10, window.mina.linear);
    }
  }
}());
