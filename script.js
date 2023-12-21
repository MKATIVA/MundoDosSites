/** @format */

// Crie um elemento HTML link para o favicon
var link = document.createElement("link");
link.rel = "icon";
link.type = "image/x-icon";
link.href = "https://archive.org/download/sem-titulo_202308/Logomarca.png"; // Substitua pelo caminho do seu favicon

// Adicione o elemento link ao cabeçalho do documento
document.head.appendChild(link);
//////////////////////////////////

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

// Captura todos os elementos do menu ////////////////
const menuItens = document.querySelectorAll(".menu-link");

// Adiciona um ouvinte de evento de clique para cada item do menu
menuItens.forEach((item) => {
  const iconeElement = item.querySelector(".icone");
  const textoElement = item.querySelector(".texto");

  item.addEventListener("click", () => {
    // Remove a cor de todos os itens
    menuItens.forEach((i) => {
      const iIconeElement = i.querySelector(".icone");
      const iTextoElement = i.querySelector(".texto");

      iTextoElement.style.display = "none";
      iIconeElement.style.color = "#fff";
      iIconeElement.style.transform = "translateY(0)";
    });

    // Define a cor e animação apenas para o item clicado
    textoElement.style.display = "inline-block";
    textoElement.style.color = "#FF6800";
    iconeElement.style.color = "#ffb682";
    iconeElement.style.transform = "translateY(-10px)";
    textoElement.style.transform = "translateY(-5px)";
  });
});

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
