var btnHamburger = document.querySelector("#btnHamburger");
var header = document.querySelector(".header");
var fadeElems = document.querySelectorAll(".has-fade");
var body = document.querySelector("body");

btnHamburger.addEventListener('click', function () {
    if (header.classList.contains("open")) {
        header.classList.remove("open");
        fadeElems.forEach(function (element) {
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        });
        body.classList.remove("noscroll");


    } else {
        header.classList.add("open");
        fadeElems.forEach(function (element) {
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        });
        body.classList.add("noscroll");
    }
})