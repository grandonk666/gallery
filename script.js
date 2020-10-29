const menuToggle = document.querySelector(".toggle input");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});


const serviceIcon = document.querySelectorAll(".icon");
serviceIcon.forEach(function(el){
  el.addEventListener('mouseenter',function(e){
    e.target.nextElementSibling.nextElementSibling.style.display = 'block';
  });
  el.addEventListener('mouseleave',function(e){
    e.target.nextElementSibling.nextElementSibling.style.display = 'none';
  });
});

