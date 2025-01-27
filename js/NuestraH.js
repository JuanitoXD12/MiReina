function showLove() {
  document.getElementById("heart").style.fontSize = "120px";
  setTimeout(() => {
    document.getElementById("heart").style.fontSize = "100px";
  }, 200);
  showNextSection(1);
}

function showNextSection(num) {
  const section = document.getElementById("section" + num);
  section.classList.add("visible");
}

const loveMessages = [
  "¡Te amo infinitamente! ",
  "Juntos por siempre ",
  "Eres mí mejor decisión ",
  "Contigo todo es mejor ",
];

function showLoveMessage() {
  const messageBox = document.getElementById("message-box");
  const randomMessage =
    loveMessages[Math.floor(Math.random() * loveMessages.length)];
  messageBox.textContent = randomMessage;
  messageBox.style.animation = "none";
  messageBox.offsetHeight;
  messageBox.style.animation = "pulse 1s";
}
