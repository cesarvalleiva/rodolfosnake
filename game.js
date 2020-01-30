const game = {
    canvasDom: undefined,
    ctx: undefined,
    w: document.getElementById("game-container").clientWidth,
    h: document.getElementById("game-container").clientHeight,
    fps: 10,
    gravity: 0.6,
    apples: [],
    score: 0,
    framesCounter: 0,
    snakeSizeInPX: 20,

    init() {
        this.canvasDom = document.getElementById("game");
        this.ctx = this.canvasDom.getContext("2d");
        this.setDimensions();
        this.start();
    },

    start() {
        this.reset();
        this.interval = setInterval(() => {
            this.framesCounter++
            this.clear();
            this.moveAll();
            this.drawAll();
            if (this.apples.length < 1) {
                this.generateApples();
            }
            this.eat();
        }, 1000 / this.fps);
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.w, this.h)
    },

    setDimensions() {
        this.canvasDom.width = this.w;
        this.canvasDom.height = this.h;
    },

    drawAll() {
        this.background.draw();
        this.apples.forEach(apple => apple.draw());
        this.snake.draw();
        this.snake.drawBody();
        this.snake.checkLimit();
    },

    moveAll() {
        this.snake.move();
        this.snake.moveBody();
    },

    reset() {
        this.background = new Background(this.ctx);

        const grid = this._generateRandomCoords()

        this.snake = new Snake(this.ctx, grid.x, grid.y, this.snakeSizeInPX);
        this.apples = [];
    },

    clear() {
        this.ctx.clearRect(0, 0, this.w, this.h);
    },

    _randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    },

    _generateRandomCoords() {
        let gridX = this._randomInt(1, 39)
        let gridY = this._randomInt(1, 29)

        return { x: gridX * 20, y: gridY * 20 }
    },

    generateApples() {
        const grid = this._generateRandomCoords()

        this.apples = [new Apple(this.ctx, grid.x, grid.y, this.snakeSizeInPX)]
    },

    eat() {
        this.apples.forEach((apple, idx) => {
            if (
                (this.snake.posX === apple.posX) &&
                (this.snake.posY === apple.posY)
            ) {
                this.snake.body.push({
                    posX: this.snake.posX,
                    posY: this.snake.posY,
                    position: { x: this.snake.posX, y: this.snake.posY},
                    direction: this.snake.direction
                })
                console.log(this.snake.body)
                this.generateApples()
            }
        })
    },

    // drawPart() {
    //     this.snake.body.forEach((_, idx) => {
    //         this.ctx.beginPath();
    //         this.ctx.fillStyle = "blue";
    //         if (this.snake.direction == 'e') {
    //             this.ctx.fillRect((this.snake.posX - this.snake.diameter) - (this.snake.diameter * idx), this.snake.posY, this.snake.diameter, this.snake.diameter);
    //         }
    //         if (this.snake.direction == 's') {
    //             this.ctx.fillRect(this.snake.posX, (this.snake.posY - this.snake.diameter) - (this.snake.diameter * idx), this.snake.diameter, this.snake.diameter);
    //         }
    //         if (this.snake.direction == 'w') {
    //             this.ctx.fillRect((this.snake.posX + this.snake.diameter) + (this.snake.diameter * idx), this.snake.posY, this.snake.diameter, this.snake.diameter);
    //         }
    //         if (this.snake.direction == 'n') {
    //             this.ctx.fillRect(this.snake.posX, (this.snake.posY + this.snake.diameter) + (this.snake.diameter * idx), this.snake.diameter, this.snake.diameter);
    //         }
    //         this.ctx.closePath();
    //     })
    // }
}