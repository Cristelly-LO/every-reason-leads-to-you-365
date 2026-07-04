// ==============================
// Every Reason Leads to You ❤️
// ==============================

// Smooth page fade
document.addEventListener("DOMContentLoaded", () => {
document.body.classList.add("loaded");

const links = document.querySelectorAll("a");

links.forEach(link => {
link.addEventListener("click", function (e) {
const href = this.getAttribute("href");

if (
href &&
!href.startsWith("http") &&
!href.startsWith("#")
) {
e.preventDefault();

document.body.classList.remove("loaded");

setTimeout(() => {
window.location.href = href;
}, 500);
}
});
});
});

// Loader
window.addEventListener("load", () => {
const loader = document.getElementById("loader");

if (!loader) return;

setTimeout(() => {
loader.style.opacity = "0";

setTimeout(() => {
loader.remove();
}, 1000);

}, 2500);
});
