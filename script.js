function mostrar() {
  document.getElementById("amo").style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  const heartsContainer = document.getElementById("hearts");
  const music = document.getElementById("bg-music");
  const volumeSlider = document.querySelector('.music-player input');

  // volume inicial
  music.volume = volumeSlider.value;

  // Corações
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }

  setInterval(createHeart, 300);

  // botão play / pause
  window.toggleMusic = function () {
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  };

  // controle de volume
  window.setVolume = function (value) {
    if (music.paused) {
      music.play(); // garante permissão do navegador
    }
    music.volume = value;
  };
});
