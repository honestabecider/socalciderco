// When the user scrolls the page, execute myFunction
window.addEventListener('load', init);

var $stickyElement = $('#container');


function init() {
  console.warn('init!');
  initSticky();
}



function initSticky(){
  console.warn('initSticky()!');

  var sticky = new Waypoint.Sticky({
  element: $stickyElement[0]
})
}
