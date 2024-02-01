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

/////////////SCROLL////////////////////
document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
});

///////////////pesquisa inserido//////////////////

function searchFunction() {
  // Obtém o valor de pesquisa inserido pelo usuário
  var searchTerm = document
    .querySelector(".search-field input")
    .value.toLowerCase();

  // Obtém todas as seções que podem ser pesquisadas
  var sections = document.querySelectorAll(".searchable-section");

  // Itera sobre cada seção para verificar se contém o termo de pesquisa
  sections.forEach(function (section) {
    // Ignora o ícone do menu
    if (!section.classList.contains("sidebarOpen")) {
      var sectionContent = section.textContent.toLowerCase();

      // Verifica se a seção contém o termo de pesquisa
      if (sectionContent.includes(searchTerm)) {
        // Se sim, exibe a seção
        section.style.display = "block";
      } else {
        // Se não, oculta a seção
        section.style.display = "none";
      }
    }
  });

  // Adiciona um ouvinte de evento ao campo de pesquisa para detectar a exclusão do conteúdo
  document
    .querySelector(".search-field input")
    .addEventListener("input", function () {
      // Se o campo de pesquisa estiver vazio, recarrega a página
      if (this.value.trim() === "") {
        location.reload();
      }
    });

  // Adiciona um ouvinte de evento ao ícone de cancelamento para recarregar a página
  document
    .querySelector(".searchToggle .cancel")
    .addEventListener("click", function () {
      location.reload();
    });
}

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



///////////////////////////////


// Função para mostrar o input de arquivo quando o link é clicado
function triggerFileInput() {
  document.getElementById("file-input").click();
}

// Função para mudar a foto de perfil
function changeProfileImage(event) {
  // Verifique se o usuário selecionou um arquivo
  if (event && event.target.files && event.target.files[0]) {
    // Crie um objeto FileReader para ler o arquivo
    var reader = new FileReader();

    // Defina a função de callback para quando a leitura estiver concluída
    reader.onload = function (e) {
      // Atualize a imagem com a nova imagem local
      document.getElementById("profile-image").style.display = "block";
      document.getElementById("profile-image").src = e.target.result;
      document.getElementById("hidden-image").style.display = "none";

      // Armazene a imagem no localStorage para recuperar após recarregar
      localStorage.setItem("profileImage", e.target.result);
    };

    // Leia o arquivo como URL de dados
    reader.readAsDataURL(event.target.files[0]);
  }
}

// Função para remover a foto de perfil
function removeProfileImage() {
  // Coloque a URL da imagem padrão quando a foto for removida
  var defaultImageURL = "Sem título-2.png";

  // Atualize a imagem com a imagem padrão
  document.getElementById("profile-image").style.display = "none";
  document.getElementById("hidden-image").style.display = "block";

  // Armazene a imagem padrão no localStorage
  localStorage.setItem("profileImage", defaultImageURL);
}

// Verifique se há uma imagem armazenada e aplique-a
var storedImage = localStorage.getItem("profileImage");
if (storedImage !== null && storedImage !== "") {
  document.getElementById("profile-image").src = storedImage;
}
