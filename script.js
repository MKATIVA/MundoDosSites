/** @format */

// Crie um elemento HTML link para o favicon
var link = document.createElement("link");
link.rel = "icon";
link.type = "image/x-icon";
link.href = "https://archive.org/download/sem-titulo_202308/Logomarca.png"; // Substitua pelo caminho do seu favicon

// Adicione o elemento link ao cabeçalho do documento
document.head.appendChild(link);

////////////////ATUALIZAR A PAGINA//////////////////

document.getElementById("logoContainer").addEventListener("click", function () {
  location.reload();
});

/////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  var modeloSelect = document.getElementById("modeloSelect");
  var academia = document.querySelector(".academia");
  var cantores = document.querySelector(".cantores");
  var coaching = document.querySelector(".coaching");
  var escola = document.querySelector(".escola");
  var iptv = document.querySelector(".iptv");
  var lojas = document.querySelector(".lojas");
  var lojasInformatica = document.querySelector(".lojas-informatica");
  var lojasMoveis = document.querySelector(".lojas-moveis");
  var materialConstrucao = document.querySelector(".material-construcao");
  var oticas = document.querySelector(".oticas");
  var panificadora = document.querySelector(".panificadora");
  var pizzarias = document.querySelector(".pizzarias");
  var sorveterias = document.querySelector(".sorveterias");
  var tituloCentral = document.getElementById("tituloCentral");

  modeloSelect.addEventListener("change", function () {
    var selectedModelo = modeloSelect.value;

    // Oculta o h1 quando uma opção for selecionada
    tituloCentral.style.display = "none";

    // Oculta todas as divs pai
    academia.style.display = "none";
    cantores.style.display = "none";
    coaching.style.display = "none";
    escola.style.display = "none";
    iptv.style.display = "none";
    lojas.style.display = "none";
    lojasInformatica.style.display = "none";
    lojasMoveis.style.display = "none";
    materialConstrucao.style.display = "none";
    oticas.style.display = "none";
    panificadora.style.display = "none";
    pizzarias.style.display = "none";
    sorveterias.style.display = "none";

    if (selectedModelo === "modelo1") {
      academia.style.display = "block";
    } else if (selectedModelo === "modelo2") {
      cantores.style.display = "block";
    } else if (selectedModelo === "modelo3") {
      coaching.style.display = "block";
    } else if (selectedModelo === "modelo4") {
      escola.style.display = "block";
    } else if (selectedModelo === "modelo5") {
      iptv.style.display = "block";
    } else if (selectedModelo === "modelo6") {
      lojas.style.display = "block";
    } else if (selectedModelo === "modelo7") {
      lojasInformatica.style.display = "block";
    } else if (selectedModelo === "modelo8") {
      lojasMoveis.style.display = "block";
    } else if (selectedModelo === "modelo9") {
      materialConstrucao.style.display = "block";
    } else if (selectedModelo === "modelo10") {
      oticas.style.display = "block";
    } else if (selectedModelo === "modelo11") {
      panificadora.style.display = "block";
    } else if (selectedModelo === "modelo12") {
      pizzarias.style.display = "block";
    } else if (selectedModelo === "modelo13") {
      sorveterias.style.display = "block";
    }
  });
});

// Botão ⬆️ de voltar

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#23135d ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

/////////////////////////////////////////////////////////

const fullscreenButton = document.getElementById("fullscreen-button"); // Obter o botão pelo ID

// Função para alternar entre ativar e desativar o modo de tela cheia
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
// Adicionar um ouvinte de evento de clique ao botão de tela cheia
fullscreenButton.addEventListener("click", toggleFullscreen);

// Adicionar um ouvinte de evento de rolagem à janela
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  // Exibir o botão quando o usuário rolar a página para baixo
  if (scrollTop > 100) {
    fullscreenButton.style.display = "block";
  } else {
    fullscreenButton.style.display = "none";
  }
});

/////////////////////////////////////

const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
  body.classList.add("dark");
}
// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");
  // js code to keep user selected mode even page refresh or file reopen
  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  } else {
    localStorage.setItem("mode", "dark-mode");
  }
});
// js code to toggle search box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});
body.addEventListener("click", (e) => {
  let clickedElm = e.target;
  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});