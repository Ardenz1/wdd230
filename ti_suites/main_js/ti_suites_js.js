// ham button 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('.menu');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// Sticky scroll nav
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}