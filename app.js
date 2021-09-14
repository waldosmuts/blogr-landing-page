const menuOpen = document.querySelector("#nav-menu-open");
const menuList = document.querySelector("#nav-menu");
const menuClose = document.querySelector("#nav-menu-close");
const dropdownTitle = document.querySelectorAll(".dropdown-title");
const dropdownMenu = document.querySelectorAll(".dropdown-menu");
const dropdownArrow = document.querySelectorAll(".dropdown-arrow");

menuOpen.addEventListener("click", () => {
    menuOpen.style.display = "none";
    menuList.style.display = "flex";
    menuClose.style.display = "block"
})

menuClose.addEventListener("click", () => {
    menuOpen.style.display = "block";
    menuList.style.display = "none";
    menuClose.style.display = "none"
})

for (let i = 0; i < dropdownTitle.length; i++) {
    dropdownTitle[i].addEventListener("click", () => {
        if (dropdownMenu[i].style.display === "flex") {
            dropdownMenu[i].style.display = "none";
            dropdownTitle[i].style.opacity = "100%";
            dropdownArrow[i].classList.remove("flip");
        } else {
            for (let ddm of dropdownMenu) {
                ddm.style.display = "none";
            }
            for (let dda of dropdownArrow) {
                dda.classList.remove("flip");
            }
            for (let ddt of dropdownTitle) {
                ddt.style.opacity = "100%";
            }
            dropdownMenu[i].style.display = "flex";
            dropdownTitle[i].style.opacity = "80%";
            dropdownArrow[i].classList.add("flip");
        }
    })
}