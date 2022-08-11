let zoomer = function (){
  document.querySelector('#img-zoomer-box')
    .addEventListener('mousemove', function(e) {

    let original = document.querySelector('#img-1'),
        magnified = document.querySelector('#img-2'),
        style = magnified.style,
        x = e.pageX - this.offsetLeft,
        y = e.pageY - this.offsetTop,
        imgWidth = original.offsetWidth,
        imgHeight = original.offsetHeight,
        xperc = ((x/imgWidth) * 100),
        yperc = ((y/imgHeight) * 100);

    //lets user scroll past right edge of image
    if(x > (.01 * imgWidth)) {
      xperc += (.15 * xperc);
    };

    //lets user scroll past bottom edge of image
    if(y >= (.01 * imgHeight)) {
      yperc += (.15 * yperc);
    };

    style.backgroundPositionX = (xperc - 9) + '%';
    style.backgroundPositionY = (yperc - 9) + '%';

    style.left = (x - 180) + 'px';
    style.top = (y - 180) + 'px';

  }, false);
}();
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

// Hiding the menu when you click outside it
document.addEventListener("click", function(e) {
  if (!toggleBtn.contains(e.target) && !mainNavList.contains(e.target)) {
    toggleBtn.classList.remove("active");
    mainNavList.classList.remove("active");
  }
})
// TOGGLE BUTTON CODE ENDS

// 'hero-img' SLIDESHOW CODE STARTS
// let slideIndex = 0;
// carousel();

// function carousel() {
//   let i;
//   let x = document.getElementsByClassName("slides");

//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }

//   slideIndex++;

//   if (slideIndex > x.length) {
//     slideIndex = 1;
//   }

//   x[slideIndex - 1].style.display = "block";
//   setTimeout(carousel, 3000);
// }
// // 'hero-img' SLIDESHOW CODE ENDS

// var MenuItems = document.getElementById("MenuItems");
// MenuItems.style.maxHeight = "0px";
// function menutoggle() {
//     if (MenuItems.style.maxHeight == "20px") {
//         MenuItems.style.maxHeight = "200px";
//     }
//     else {
//         MenuItems.style.maxHeight = "0px";
//     }
// }