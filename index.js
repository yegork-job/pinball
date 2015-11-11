(function(){
  'use strict';

  window.addEventListener('load', wndLoad);
  function wndLoad() {
    var svg = window.Snap('#svg');
    var fieldBBox = svg.node.getBoundingClientRect();
    var bat = new window.Bat(fieldBBox);
    var ball = new window.Ball(fieldBBox);
    var actions = {
      37: 'left',
      39: 'right'
    };

    document.body.addEventListener('keydown', keydownListener);

    setInterval(play, 16);

    function keydownListener(evt){
      if (evt.keyCode && actions[evt.keyCode]) {
        bat[actions[evt.keyCode]]();
        evt.preventDefault();
        evt.stopPropagation();
      }
    }

    function play() {
      ball.move();
    }
  }
}());
