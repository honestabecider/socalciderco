// When the user scrolls the page, execute myFunction
window.addEventListener('load', init);


var header,
    stickyPostion;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function handleSticky() {
  var windowOffset = window.scrollY;
  if (windowOffset >= stickyPosition) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//resets the stickyPostion variable as the window resizes
function handleResize() {
  stickyPosition = header.offsetTop;
}

function init() {
  header = document.getElementById("container"); // Get the header
  stickyPosition = header.offsetTop; // Get the offset position of the navbar

  window.onscroll = function() {handleSticky()};
  window.addEventListener('resize', handleResize);
}
