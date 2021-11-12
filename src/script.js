let character = document.querySelector('.character');

const MOVE = 20;

window.addEventListener('load', () => {
    character.style.position = 'absolute';
    character.style.left = 0;
    character.style.top = 0;
});

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            character.style.left = parseInt(character.style.left) - MOVE + 'px';
            break;
        case 'ArrowRight':
            character.style.left = parseInt(character.style.left) + MOVE + 'px';
            break;
        case 'ArrowUp':
            character.style.top = parseInt(character.style.top) - MOVE + 'px';
            break;
        case 'ArrowDown':
            character.style.top = parseInt(character.style.top) + MOVE + 'px';
            break;
    }
});