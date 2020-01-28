/** @type HTMLCanvasElement */
const canvasDOMEl = document.getElementById("game");

/** @type CanvasRenderingContext2D */
const ctx = canvasDOMEl.getContext("2d");

let w, h, w2, h2, posX;
const PI = Math.PI;
const PI_DOUBLE = PI * 2;
let Ball = {
    posX: 50,
    posY: 50,
    direction: 'e',
    green: '#20511E',
    greenTwo: '#709775',
    background: [],
    w: document.getElementById("game-container").clientWidth,
    h: document.getElementById("game-container").clientHeight,
    move: function () {
        window.onkeydown = e => {
            if (e.keyCode === 39) {
                this.direction = 'e';
            }
            if (e.keyCode === 37) {
                this.direction = 'w';
            }
            if (e.keyCode === 40) {
                this.direction = 's';
            }
            if (e.keyCode === 38) {
                this.direction = 'n';
            }
        }
    },
    drawBall: function () {
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, 10, 0, PI_DOUBLE);
        ctx.fillStyle = 'rgb(255, 0, 0)';
        ctx.fill();
        ctx.closePath();
        switch (this.direction) {
            case 'n':
                this.posY--;
                break;
            case 's':
                this.posY++;
                break;
            case 'w':
                this.posX--;
                break;

            default:
                this.posX++;
                break;
        }
    },
    // drawBackground() {
    //     ctx.beginPath();
    //     ctx.fillStyle = 'rgb(0, 255, 255)';
    //     ctx.fillRect(0, 0, 20, 20);
    //     ctx.closePath();

}

    

        // ctx.beginPath();
        // if(this.w % 10 === 0){
        //     ctx.fillStyle = '#709775'
        // } else {
        //    ctx.fillStyle = '#20511E'
        // }
        // ctx.fillRect(0, 0, 15, 15);
        // ctx.closePath();

let Scenario = {
    clear: function () {
        ctx.clearRect(0, 0, w, h);
    }
};



const setCanvasDimensions = () => {
    w = document.getElementById("game-container").clientWidth
    h = document.getElementById("game-container").clientHeight
    w2 = w / 2;
    h2 = h / 2;
    posX = w2;
    canvasDOMEl.setAttribute("width", `${w}px`);
    canvasDOMEl.setAttribute("height", `${h}px`);

    draw();
};

const randomFloat = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const shuffle = array => array.sort(() => Math.random() - 0.5);

window.onresize = setCanvasDimensions;

setCanvasDimensions();
