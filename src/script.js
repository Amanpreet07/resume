const PLAYGROUND = document.querySelector('.playground');
const CTX = PLAYGROUND.getContext('2d');
const PLAYGROUND_WIDTH = PLAYGROUND.width = 600;
const PLAYGROUND_HEIGHT = PLAYGROUND.height = 600;

const CHARACTER = new Image();
CHARACTER.src = '../assets/sprite-sheet.png';
let characterState = 'idle'

// Image width / number of columns. 6876/12
const SPRITEWIDTH = 575;
// Image height / number of rows. 5230/10
const SPRITEHEIGHT = 523;

/**
 * RUN ANIMATIONS AFTER CERTAIN FRAMES
 */
let gameframe = 0;
const STAGGER_FRAME = 7;

// Animation meta data
const ANIMATIONS_METADATA = []
const ANIMATION_DESCRIPTION = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
]

ANIMATION_DESCRIPTION.forEach((state, idx) => {
    let frames = {
        loc: [],
    }
    for(let i = 0; i < state.frames ; i++){
        frames.loc.push({x: i * SPRITEWIDTH, y: idx * SPRITEHEIGHT})
    }
    ANIMATIONS_METADATA[state.name] = frames;
})

// GAME LOOP
function animate(){
    CTX.clearRect(0, 0, PLAYGROUND_WIDTH, PLAYGROUND_HEIGHT);
    let position = Math.floor(gameframe/STAGGER_FRAME) % ANIMATIONS_METADATA[characterState].loc.length;
    let frameX = SPRITEWIDTH * position;
    let frameY = SPRITEHEIGHT * ANIMATIONS_METADATA[characterState].loc[position].y;
    CTX.drawImage(CHARACTER, frameX, frameY, SPRITEWIDTH, SPRITEHEIGHT,
        0, 0, SPRITEWIDTH, SPRITEHEIGHT);

    gameframe++;
    requestAnimationFrame(animate);
};
animate();