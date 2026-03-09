const backToTop = document.getElementById("backToTop");

window.onscroll = function () {
if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
backToTop.style.display = "block";
} else {
backToTop.style.display = "none";
}
};

backToTop.onclick = function () {
window.scrollTo({
top: 0,
behavior: "smooth"
});
};

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
link.addEventListener("click", () => {
navMenu.classList.remove("active");
});
});