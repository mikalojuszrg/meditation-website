const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
    
    )

// const parallax = document.getElementById("parallax");

// window.addEventListener("scroll", function()
// {
//     let offset = window.pageYOffset
//     console.log('Offset: ' + offset);
// })