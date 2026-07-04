// ==============================
// Every Reason Leads to You ❤️
// ==============================

// Fade in page
document.addEventListener("DOMContentLoaded", () => {
document.body.classList.add("loaded");
});

// Loader
window.addEventListener("load", () => {
const loader = document.getElementById("loader");

if (!loader) return;

setTimeout(() => {
loader.style.opacity = "0";

setTimeout(() => {
