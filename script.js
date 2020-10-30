const menuToggle = document.querySelector(".toggle input");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});



// const serviceIcon = document.querySelectorAll(".service");
// serviceIcon.forEach(function(el){
//   el.addEventListener('mouseenter',function(e){
//     e.target.lastElementChild.style.display = 'block';
//   });
//   el.addEventListener('mouseleave',function(e){
//     e.target.lastElementChild.style.display = 'none';
//   });
// });

$(document).ready(function(){
  $(".toggle input").click(
    function(){
      $("nav ul").toggleClass("slide")
    }
  );


  $('.service').hover(
    function(){
      $(this.lastElementChild).slideDown(500);
    },function(){
      $(this.lastElementChild).slideUp(500);
    }
  );
});