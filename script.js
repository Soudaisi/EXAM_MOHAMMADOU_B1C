document.addEventListener("DOMContentLoaded", function () {
    const burger = document.createElement("div");
    burger.classList.add("burger");
    burger.innerHTML = "☰";
    const nav = document.querySelector("nav");

    if (window.innerWidth < 768) {
        nav.parentNode.insertBefore(burger, nav);
        nav.style.display = "none";

        burger.addEventListener("click", () => {
            nav.style.display = nav.style.display === "none" ? "flex" : "none";
        });
    }
});

window.addEventListener("scroll", function () {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const trigger = window.innerHeight / 1.2;

        if (boxTop < trigger) {
            box.classList.add("visible");
        }
    });
});