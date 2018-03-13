// When the user scrolls the page, execute myFunction
window.addEventListener('load', init);

var $stickyElement = $('#container');


function init() {
  initSticky();
  initMobileNav();
}



function initMobileNav() {
  $hamburger = $('#hamburger');

  $hamburger.on('click', function(){
      $stickyElement.toggleClass('mobile-open');
  });
}

function initSticky(){
  var sticky = new Waypoint.Sticky({
    element: $stickyElement[0]
  });
}
