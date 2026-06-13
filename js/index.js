const moodBtn = document.getElementById('moodBtn');
const moodText = document.getElementById('moodText');

const messages = [
  'Tu sonrisa ilumina hasta el cielo más gris 💙',
  'Cada momento contigo se vuelve un recuerdo precioso ✨',
  'Te amo más de lo que las palabras pueden decir 💖',
  'Nuestro amor siempre brilla, incluso en los días más tranquilos 🌤️'
];

if (moodBtn && moodText) {
  moodBtn.addEventListener('click', () => {
    const nextMessage = messages[Math.floor(Math.random() * messages.length)];
    moodText.textContent = nextMessage;
    moodBtn.classList.add('pulse');
    setTimeout(() => moodBtn.classList.remove('pulse'), 300);
  });
}
