const menuToggle = document.querySelector(".toggle input");
const nav = document.querySelector("nav ul");
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const p = document.createElement("p");
const teks = document.createTextNode(
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione numquam, veniam sapiente ut quaerat accusamus."
);

const service1 = document.querySelectorAll(".service")[0];
service1.addEventListener("mouseenter", function () {
  p.appendChild(teks);
  service1.appendChild(p);
});
service1.addEventListener("mouseleave", function () {
  p.appendChild(teks);
  service1.removeChild(p);
});

const service2 = document.querySelectorAll(".service")[1];
service2.addEventListener("mouseenter", function () {
  p.appendChild(teks);
  service2.appendChild(p);
});
service2.addEventListener("mouseleave", function () {
  p.appendChild(teks);
  service2.removeChild(p);
});

const service3 = document.querySelectorAll(".service")[2];
service3.addEventListener("mouseenter", function () {
  p.appendChild(teks);
  service3.appendChild(p);
});
service3.addEventListener("mouseleave", function () {
  p.appendChild(teks);
  service3.removeChild(p);
});

const service4 = document.querySelectorAll(".service")[3];
service4.addEventListener("mouseenter", function () {
  p.appendChild(teks);
  service4.appendChild(p);
});
service4.addEventListener("mouseleave", function () {
  p.appendChild(teks);
  service4.removeChild(p);
});
