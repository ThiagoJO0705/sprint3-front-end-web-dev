function showMenu() {
    const menuMobile = document.querySelector(".menu-mobile");
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
        menuMobile.classList.add("close");
    } else {
        menuMobile.classList.remove("close");
        menuMobile.classList.add("open");
    }
}

const boxMenuMobile = document.querySelector(".box-menu-mobile");
boxMenuMobile.addEventListener("click", showMenu)
