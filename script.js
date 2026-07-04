// ==============================
// Every Reason Leads to You ❤️
// Version 1.0
// ==============================

// Smooth page fade when clicking links
document.addEventListener("DOMContentLoaded", () => {

document.body.classList.add("loaded");

const links = document.querySelectorAll("a");

links.forEach(link => {

link.addEventListener("click", function(e){

const href = this.getAttribute("href");

if(
href &&
!href.startsWith("http") &&
!href.startsWith("#")
){

  window.addEventListener("load", function () {
const loader = document.getElementById("loader");

if (loader) {
setTimeout(function () {
loader.style.opacity = "0";

setTimeout(function () {
loader.remove();
}, 1000);

}, 2500);
}
});
