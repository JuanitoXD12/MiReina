function openLetter() {
    document.getElementById('envelope').classList.add('opened');
    setTimeout(() => {
        document.getElementById('letter').classList.add('visible');
    }, 600);
}

// Agregar corazones decorativos
const heartPositions = [
    { top: '10%', left: '10%' },
    { top: '20%', right: '15%' },
    { top: '70%', left: '20%' },
    { top: '80%', right: '10%' }
];

heartPositions.forEach(pos => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💙';
    Object.assign(heart.style, pos);
    document.body.appendChild(heart);
});