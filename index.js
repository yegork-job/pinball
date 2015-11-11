(function(){
  'use strict';
  /*jshint validthis: true*/

  window.addEventListener('load', wndLoad);
  function wndLoad() {
    var svg = window.Snap('#svg');
    var batEl = window.Snap('#bat');
    var fieldBBox = svg.node.getBoundingClientRect();
    var bat = new Bat(fieldBBox);
    var actions = {
      37: 'left',
      39: 'right'
    };
    console.log(bat);

    document.body.addEventListener('keydown', keydownListener);

    function Bat(field) {
      var batBBox = batEl.getBBox();
      this.elem = batEl;
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

    function keydownListener(evt){
      if (evt.keyCode && actions[evt.keyCode]) {
        bat[actions[evt.keyCode]]();
        evt.preventDefault();
        evt.stopPropagation();
      }
    }

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
      this.elem.transform(matr.translate(this.x - this.bBox.x, 0));
    }
  }
}());
