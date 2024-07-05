const bird = document.querySelector('.bird');
let birdPosition = 250;
let gravity = 0.5;

function flap() {
    birdPosition -= 20;
}

function updateBird() {
    birdPosition += gravity;
    bird.style.top = birdPosition + 'px';
}

document.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        flap();
    }
});

function gameLoop() {
    updateBird();
    requestAnimationFrame(gameLoop);
}

gameLoop();
