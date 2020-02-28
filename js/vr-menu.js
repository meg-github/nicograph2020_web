'use strict';


var tid = setInterval( function () {
  if ( document.readyState !== 'complete' ) return;
  clearInterval( tid );


  var qS = document.querySelector.bind(document);

  var nav = document.querySelector('.v_nav');
  var toggle = document.querySelector('.toggle_menu');
  
  qS('.toggle_menu').onclick =function() {

    nav.classList.toggle('v_nav__opened');
    toggle.classList.toggle('toggle_menu__opened');

  };

}, 100 );

