document.addEventListener("DOMContentLoaded", function () {

document.body.classList.add("loaded");

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
