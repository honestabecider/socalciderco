// When the user scrolls the page, execute myFunction
window.onscroll = function() {handleSticky()};

// Get the header
var header = document.getElementById("container");
// Get the offset position of the navbar
var stickyPosition = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function handleSticky() {
  var windowOffset = window.scrollY;

  if (windowOffset >= stickyPosition) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
