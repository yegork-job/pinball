(function(){
  'use strict';
  /*jshint validthis: true*/

  window.addEventListener('load', wndLoad);
  function wndLoad() {
    window.Bat = Bat;

    function Bat(field) {
      this.elem = window.Snap('#bat');
      var batBBox = this.elem.getBBox();
      this.bBox = batBBox;
      this.field = field;
      this.x = batBBox.x;
      this.y = batBBox.y;
      this.dx = field.width / 30;
      this.width = batBBox.width;
    }
    Bat.prototype.left = leftFunc;
    Bat.prototype.right = rightFunc;
    Bat.prototype.draw = drawBat;

    function rightFunc() {
      this.x += this.dx;
      if (this.x + this.width > this.field.width) {
        this.x = this.field.width - this.width;
      }
      this.draw();
    }
    function leftFunc() {
      this.x -= this.dx;
      if (this.x < this.field.left) {
        this.x = this.field.left;
      }
      this.draw();
    }
    function drawBat() {
      var matr = new window.Snap.Matrix();
      this.elem.animate({transform: matr.translate(this.x - this.bBox.x, 0)}, 10, window.mina.easeinout);
    }
  }
}());
