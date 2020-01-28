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
    },

    moveAll() {
        this.snake.move();
    },

    reset() {
        this.background = new Background(this.ctx);

        const grid = this._generateRandomCoords()

        this.snake = new Snake(this.ctx, grid.x, grid.y, this.snakeSizeInPX);
        console.log("snake", grid.x, grid.y)
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
                this.snake.body++
                console.log(this.snake.body)
                this.generateApples()
                return
            }
        })
    }
}