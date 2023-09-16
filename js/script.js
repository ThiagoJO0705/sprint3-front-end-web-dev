function showMenu() {
    const menuMobile = document.querySelector(".menu-mobile");
    const linha1 = document.querySelector(".linha1-menu")
    const linha2 = document.querySelector(".linha2-menu")
    const linha3 = document.querySelector(".linha3-menu")
    const boxMenu = document.querySelector(".box-menu-mobile")
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
        menuMobile.classList.add("close");
        linha1.style.opacity = "1"
        linha2.style.transform = "rotate(0deg)";
        linha3.style.transform = "translateY(0) rotate(0deg)"
        boxMenu.style.gap = "1rem   "
    } else {
        menuMobile.classList.remove("close");
        menuMobile.classList.add("open");
        linha1.style.opacity = "0"
        linha2.style.transform = "rotate(45deg)"
        linha3.style.transform = "translateY(-6px) rotate(-45deg)"
        boxMenu.style.gap = "0"
    }
}

const boxMenuMobile = document.querySelector(".box-menu-mobile");
boxMenuMobile.addEventListener("click", showMenu)

const mainMenu = document.querySelector("#menu-mobile-main");
const problemaMenu = document.querySelector("#menu-mobile-problema");
const solucaoMenu = document.querySelector("#menu-mobile-solucao");
const demonstracaoMenu = document.querySelector("#menu-mobile-demonstracao");
const vantagensMenu = document.querySelector("#menu-mobile-vantagens");
