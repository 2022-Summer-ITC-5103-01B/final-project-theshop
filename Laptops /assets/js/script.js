// TOGGLE BUTTON CODE STARTS
const toggleBtn = document.querySelector(".toggle-btn");
const mainNavList = document.querySelector(".main-nav-list");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    mainNavList.classList.toggle("active");
    })

document.querySelectorAll(".main-nav-link").forEach(e => e.addEventListener("click", () => {
    toggleBtn.classList.remove("active");
    mainNavList.classList.remove("active");
}))
// TOGGLE BUTTON CODE ENDS


// SLIDESHOW CODE STARTS
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  
  for(i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }

  slideIndex++;
  
  if(slideIndex > x.length) {
    slideIndex = 1;
  } 

  x[slideIndex - 1].style.display = "block"; 
  setTimeout(carousel, 3000); 
}
// SLIDESHOW CODE ENDS