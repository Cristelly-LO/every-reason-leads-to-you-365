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
window.addEventListener("load", () => {

setTimeout(() => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},1000);

},2500);

});
e.preventDefault();

document.body.classList.remove("loaded");

setTimeout(() => {
window.location.href = href;
}, 600);

}

});

});

});
