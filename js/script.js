// Função para alternar entre o menu mobile e o ícone "X"
function showMenu() {
    const menuMobile = document.querySelector(".menu-mobile");
    const linha1 = document.querySelector(".linha1-menu");
    const linha2 = document.querySelector(".linha2-menu");
    const linha3 = document.querySelector(".linha3-menu");
    const boxMenu = document.querySelector(".box-menu-mobile");

    // Verifica se o menu mobile está aberto ou fechado
    if (menuMobile.classList.contains("open")) {
        // Fecha o menu
        menuMobile.classList.remove("open");
        menuMobile.classList.add("close");
        linha1.style.opacity = "1";
        linha2.style.transform = "rotate(0deg)";
        linha3.style.transform = "translateY(0) rotate(0deg)";
        boxMenu.style.gap = "1rem";
    } else {
        // Abre o menu
        menuMobile.classList.remove("close");
        menuMobile.classList.add("open");
        linha1.style.opacity = "0";
        linha2.style.transform = "rotate(45deg)";
        linha3.style.transform = "translateY(-6px) rotate(-45deg)";
        boxMenu.style.gap = "0";
    }
}

// Função para fechar o menu e restaurar o ícone do menu hamburguer
function closeMenu() {
    const menuMobile = document.querySelector(".menu-mobile");
    const linha1 = document.querySelector(".linha1-menu");
    const linha2 = document.querySelector(".linha2-menu");
    const linha3 = document.querySelector(".linha3-menu");
    const boxMenu = document.querySelector(".box-menu-mobile");

    // Fecha o menu
    menuMobile.classList.remove("open");
    menuMobile.classList.add("close");
    
    // Restaura o ícone do menu hamburguer após um breve atraso para animação
    setTimeout(function() {
        linha1.style.opacity = "1";
        linha2.style.transform = "rotate(0deg)";
        linha3.style.transform = "translateY(0) rotate(0deg)";
        boxMenu.style.gap = "1rem";
    }, 200);
}

// Adiciona eventos de clique para o menu mobile e os links do menu
const boxMenuMobile = document.querySelector(".box-menu-mobile");
boxMenuMobile.addEventListener("click", showMenu);

const mainMenu = document.querySelector("#menu-mobile-main");
const problemaMenu = document.querySelector("#menu-mobile-problema");
const solucaoMenu = document.querySelector("#menu-mobile-solucao");
const demonstracaoMenu = document.querySelector("#menu-mobile-demonstracao");
const vantagensMenu = document.querySelector("#menu-mobile-vantagens");

mainMenu.addEventListener("click", closeMenu);
problemaMenu.addEventListener("click", closeMenu);
solucaoMenu.addEventListener("click", closeMenu);
demonstracaoMenu.addEventListener("click", closeMenu);
vantagensMenu.addEventListener("click", closeMenu);
