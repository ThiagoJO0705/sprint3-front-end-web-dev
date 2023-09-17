// =============================== MENU MOBILE ===============================
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

// Adiciona um evento de clique ao elemento com classe "box-menu-mobile" para chamar a função showMenu
const boxMenuMobile = document.querySelector(".box-menu-mobile");
boxMenuMobile.addEventListener("click", showMenu);


// =============================== FECHAR LOGIN ===============================
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

// Adiciona eventos de clique aos elementos do menu mobile para fechar o menu quando um item é selecionado
const mainMenuMobile = document.querySelector("#menu-mobile-main");
const problemaMenuMobile = document.querySelector("#menu-mobile-problema");
const solucaoMenuMobile = document.querySelector("#menu-mobile-solucao");
const demonstracaoMenuMobile = document.querySelector("#menu-mobile-demonstracao");
const vantagensMenuMobile = document.querySelector("#menu-mobile-vantagens");

mainMenuMobile.addEventListener("click", closeMenu);
problemaMenuMobile.addEventListener("click", closeMenu);
solucaoMenuMobile.addEventListener("click", closeMenu);
demonstracaoMenuMobile.addEventListener("click", closeMenu);
vantagensMenuMobile.addEventListener("click", closeMenu);



// =============================== MOSTRAR LOGIN ===============================
// Variáveis e função para alternar entre a exibição do formulário de login e o conteúdo principal
let count = 1;
const sectionForm = document.querySelector(".section-login");
const main = document.querySelector("#main");
const sectionProblema = document.querySelector("#problema");
const sectionSolucao = document.querySelector("#solucao");
const sectionDemonstracao = document.querySelector("#demonstracao");
const sectionVantagens = document.querySelector("#vantagens");
const containerGrid = document.querySelector(".container-grid");


function showLogin() {
    if (count === 1) {
        sectionForm.style.display = "flex";
        count -= 1;
        main.style.display = "none";
        sectionProblema.style.display = "none";
        sectionSolucao.style.display = "none";
        sectionDemonstracao.style.display = "none";
        sectionVantagens.style.display = "none";
        // Atualiza os atributos href dos links do menu mobile
        // e ajusta o layout do grid
        // Isso parece estar relacionado a como a navegação é controlada quando o formulário de login está visível
        mainMenuMobile.href = "#";
        problemaMenuMobile.href = "#";
        solucaoMenuMobile.href = "#";
        demonstracaoMenuMobile.href = "#";
        vantagensMenuMobile.href = "#";
        mainMenu.href = "#";
        problemaMenu.href = "#";
        solucaoMenu.href = "#";
        demonstracaoMenu.href = "#";
        vantagensMenu.href = "#";
        containerGrid.style.gridTemplateRows = "repeat(6, 170px)";
    }
}

// Adiciona eventos de clique aos botões de login
const btnLogin = document.querySelector(".login-btn");
const btnLoginMobile = document.querySelector(".login-mobile");
btnLogin.addEventListener("click", showLogin);
btnLoginMobile.addEventListener("click", showLogin);
btnLoginMobile.addEventListener("click", closeMenu);  // Fecha o menu mobile quando o formulário é exibido


// =============================== RETORNAR À PAGINA PRINCIPAL ===============================
// Função para retornar à página principal a partir do formulário de login
function returnPage() {
    if (count === 0) {
        sectionForm.style.display = "none";
        count += 1;
        main.style.display = "block";
        sectionProblema.style.display = "flex";
        sectionSolucao.style.display = "flex";
        sectionDemonstracao.style.display = "flex";
        sectionVantagens.style.display = "block";
        // Atualiza os atributos href dos links do menu mobile
        // e ajusta o layout do grid de volta ao estado original
        mainMenuMobile.href = "#main";
        problemaMenuMobile.href = "#problema";
        solucaoMenuMobile.href = "#solucao";
        demonstracaoMenuMobile.href = "#demonstracao";
        vantagensMenuMobile.href = "#vantagens";
        mainMenu.href = "#main";
        problemaMenu.href = "#problema";
        solucaoMenu.href = "#solucao";
        demonstracaoMenu.href = "#demonstracao";
        vantagensMenu.href = "#vantagens";
        containerGrid.style.gridTemplateRows = "repeat(24, 170px)";
    }
}

// Adiciona um evento de clique à imagem de retorno para voltar à página principal
const returnImg = document.querySelector("#return");
returnImg.addEventListener("click", returnPage);


// =============================== LOGIN ===============================
// Função para lidar com o processo de login
function login(event) {
    event.preventDefault();

    const loginInput = document.querySelector("#login-form");
    const senhaInput = document.querySelector("#senha-form");
    const spanLogin = document.querySelector(".span-login");
    
    // Verifica se o login e a senha estão corretos
    if (loginInput.value === 'Admin' && senhaInput.value === "123456") {
        loginInput.style.border = "2px solid green";  // Define uma borda verde ao redor do campo de login
        senhaInput.style.border = "2px solid green";  // Define uma borda verde ao redor do campo de senha
        alert('Sucesso!');  // Exibe um alerta de sucesso
        window.location.href = "https://github.com/Rodrigo-Brasileiro/Sprint3edge";  // Redireciona para a URL especificada
    }
    else{
        loginInput.style.border = "2px solid red";  // Define uma borda vermelha ao redor do campo de login
        senhaInput.style.border = "2px solid red";  // Define uma borda vermelha ao redor do campo de senha
        spanLogin.style.visibility = "visible";  // Torna o elemento com classe "span-login" visível (provavelmente uma mensagem de erro)
    }
}

// Adiciona um evento de clique ao botão com classe "botao-entrar-login" para chamar a função login
const btnEntrarLogin = document.querySelector(".botao-entrar-login");
btnEntrarLogin.addEventListener("click", login);


// =============================== BOTAO CONHEÇA NOSSO PROJETO ===============================
// Adiciona um evento de clique ao botão com classe "btn-projeto" para chamar a função showLogin
const btnProjeto = document.querySelector(".btn-projeto");
btnProjeto.addEventListener("click", showLogin);


// =============================== DARK MODE ===============================
const btnTema = document.getElementById('btn-tema');
const imagemTema = document.getElementById('imagem-tema');
let modoEscuro = false;

// Adiciona um evento de clique ao botão de tema para alternar entre os modos claro e escuro
btnTema.addEventListener("click", () => {
  if (!modoEscuro) {
    modoEscuro = true;
    containerGrid.classList.add("dark");
    imagemTema.src = 'img/sol-icon-removebg-preview.png';  
    imagemTema.alt = 'sol(light-mode)';  
  } else {
    modoEscuro = false;
    containerGrid.classList.remove("dark");  
    imagemTema.src = 'img/lua-icon-removebg-preview.png';  
    imagemTema.alt = 'lua(dark-mode)';  
  }
});