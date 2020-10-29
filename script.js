const menuToggle = document.querySelector(".toggle input");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});


const serviceIcon = document.querySelectorAll(".icon");
serviceIcon.forEach(function(el){
  el.parentNode.addEventListener('mouseenter',function(e){
    e.target.lastElementChild.style.display = 'block';
  });
  el.parentNode.addEventListener('mouseleave',function(e){
    e.target.lastElementChild.style.display = 'none';
  });
});

