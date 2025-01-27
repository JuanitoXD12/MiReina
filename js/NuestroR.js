let currentMemoryIndex = 0;
const memories = document.querySelectorAll(".memory");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showMemory(index) {
  memories.forEach((memory) => {
    memory.classList.remove("active");
  });
  memories[index].classList.add("active");

  // Actualizar estado de los botones
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === memories.length - 1;
}

function showNextMemory() {
  if (currentMemoryIndex < memories.length - 1) {
    currentMemoryIndex++;
    showMemory(currentMemoryIndex);
    createFloatingHearts();
  }
}

function showPrevMemory() {
  if (currentMemoryIndex > 0) {
    currentMemoryIndex--;
    showMemory(currentMemoryIndex);
    createFloatingHearts();
  }
}

function showLoveMessage(messageIndex) {
  const messages = [
    "¡Gracias por ser parte de mi vida! ❤️",
    "¡Siempre juntos, mi amor! 💑",
    "Te amo con todo mi corazón 💖",
  ];
  alert(messages[messageIndex - 1]);
  createFloatingHearts();
}

function createFloatingHearts() {
  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.className = "floating-heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    // Eliminar el corazón después de la animación
    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}

// Inicializar la página
showMemory(currentMemoryIndex);
