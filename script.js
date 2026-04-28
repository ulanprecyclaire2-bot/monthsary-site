function showSurprise() {
  document.getElementById("surprise").innerHTML =
    "I love you forever, babi ❤️✨";
}

/* MUSIC */
function toggleMusic() {
  const music = document.getElementById("music");
  if (music.paused) music.play();
  else music.pause();
}

/* LETTER */
function revealLetter() {
  document.getElementById("letter").classList.remove("hidden");
}

/* TYPING EFFECT */
const text = "Made with love, just for you babi ❤️";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

/* FLOATING HEARTS */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 300);
