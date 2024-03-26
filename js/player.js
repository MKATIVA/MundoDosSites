/** @format */

// Função para carregar o vídeo do YouTube
function carregarVideo() {
  // Substitua 'VIDEO_ID' pelo ID do vídeo do YouTube que deseja reproduzir
  var videoId = "AR3wNUhpmew";

  // Crie um novo objeto de player
  var player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: videoId,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// Quando o player estiver pronto, reproduza o vídeo
function onPlayerReady(event) {
  event.target.playVideo();
}

// Quando o estado do player mudar
function onPlayerStateChange(event) {
  // Se o vídeo terminar, pausa o player
  if (event.data == YT.PlayerState.ENDED) {
    event.target.stopVideo();
  }
}

// Carregar a API do YouTube após o carregamento da página
function carregarAPIYoutube() {
  var tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Carregar a API do YouTube
carregarAPIYoutube();

// Quando a API do YouTube estiver pronta, carregue o vídeo
window.onYouTubeIframeAPIReady = carregarVideo;
