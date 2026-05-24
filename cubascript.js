function changeTab(tabId) {
  document
    .querySelectorAll("section")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll("nav button")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
  document.getElementById("btn-" + tabId).classList.add("active");

  const hero = document.getElementById("capa-hero");
  if (tabId === "historia") {
    hero.style.display = "flex";
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    hero.style.display = "none";
    window.scrollTo({ top: 0 });
  }
}

function openModal(titulo, desc, midia) {
  document.getElementById("tituloModal").innerText = titulo;
  document.getElementById("descModal").innerText = desc;

  const img = document.getElementById("imgModal");
  const video = document.getElementById("videoModal");
  const videoSrc = document.getElementById("videoSrcModal");
  const youtubeFrame = document.getElementById("youtubeModal");

  // Reset all media elements first
  img.style.display = "none";
  video.pause();
  video.style.display = "none";
  youtubeFrame.src = "";
  youtubeFrame.style.display = "none";

  const isYoutube = midia.startsWith("youtube:");
  const isVideo = !isYoutube && midia.match(/\.(mp4|webm|ogg)$/i);

  if (isYoutube) {
    const videoId = midia.split(":")[1];
    youtubeFrame.src = "https://www.youtube.com/embed/" + videoId;
    youtubeFrame.style.display = "block";
  } else if (isVideo) {
    videoSrc.src = "Images/" + midia;
    video.load();
    video.style.display = "block";
  } else {
    img.src = "Images/" + midia;
    img.style.display = "block";
  }

  document.getElementById("meuModal").style.display = "flex";
}

function closeModal() {
  const video = document.getElementById("videoModal");
  video.pause();
  // Stop YouTube by clearing src
  const youtubeFrame = document.getElementById("youtubeModal");
  youtubeFrame.src = "";
  document.getElementById("meuModal").style.display = "none";
}

function traduzirSite() {
  const urlAtual = window.location.href;
  const urlTraduzida = `https://translate.google.com/translate?sl=pt&tl=es&u=${encodeURIComponent(urlAtual)}`;
  window.open(urlTraduzida, "_blank");
}