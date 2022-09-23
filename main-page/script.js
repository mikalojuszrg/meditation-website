const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
    
    )

let leaves = document.getElementById("leaves");

window.addEventListener('scroll', function() {
    var value = window.scrollY;

    leaves.style.top = value * 0.1 + 'px';
})