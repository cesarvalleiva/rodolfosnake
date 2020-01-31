const game = {
    canvasDom: undefined,
    ctx: undefined,
    w: 800,
    h: 600,
    fps: 10,
    gravity: 0.6,
    apples: [],
    qtyApples: 0,
    body: [],
    imgApple: './img/apple.png',
    score: 0,
    framesCounter: 0,
    snakeSizeInPX: 20,

    init() {
        this.canvasDom = document.getElementById("game");
        this.ctx = this.canvasDom.getContext("2d");
        this.setDimensions();
        this.reset();
        WelcomeScreen.show(game)
    },

    start() {
        document.querySelector("#game-container").style.display = "block"
        this.interval = setInterval(() => {
            // console.log(this.snake.body)
            this.framesCounter++
            this.clear();
            this.moveAll();
            this.drawAll();
            if (this.apples.length < 1) {
                this.generateApples();
            }
            this.snake.body.forEach(element => element.checkDirection())
            this.eat();
            this.isCollision();
            document.querySelector('.score-number').innerHTML = this.score
            document.querySelector('.score-apples').innerHTML = this.qtyApples
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
        // this.background.draw();
        this.apples.forEach(apple => apple.draw());
        this.snake.draw();
        this.snake.body.forEach(element => element.draw())
    },

    moveAll() {
        this.snake.move();
        this.snake.moveBody();
        this.snake.body.forEach(element => element.move())
    },

    reset() {
        document.querySelector("#overlay").style.display = "none"
        document.querySelector("#game-over").style.display = "none"

        this.background = new Background(this.ctx);

        const grid = this._generateRandomCoords()
        // const grid = {
        //     x: 140,
        //     y: 100
        // }

        this.snake = new Snake(this.ctx, grid.x, grid.y, this.snakeSizeInPX);
        this.body = [];
        this.apples = [];
        this.score = 0
        this.qtyApples = 0
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
        this.score += 3
        this.qtyApples++
    },

    eat() {
        this.apples.forEach((apple, idx) => {
            if (
                (this.snake.posX === apple.posX) &&
                (this.snake.posY === apple.posY)
            ) {


                switch (this.snake.direction) {
                    case 'n':
                        this.snake.body.push(new BodyTest(this.ctx, this.snake.posX, (this.snake.posY + (this.snake.diameter * (this.snake.body.length + 1))), "n"));
                        break;

                    case 'e':
                        this.snake.body.push(new BodyTest(this.ctx, (this.snake.posX - (this.snake.diameter * (this.snake.body.length + 1))), this.snake.posY, "e"));
                        break;

                    case 's':
                        this.snake.body.push(new BodyTest(this.ctx, this.snake.posX, (this.snake.posY - (this.snake.diameter * (this.snake.body.length + 1))), "s"));
                        break;

                    case 'w':
                        this.snake.body.push(new BodyTest(this.ctx, (this.snake.posX + (this.snake.diameter * (this.snake.body.length + 1))), this.snake.posY, "w"));
                        break;
                }


                this.generateApples()
            }
        })


    },

    gameOver() {
        this.reset()
        document.querySelector("#game-container").style.display = "none"
        GameOverScreen.show(game)
        clearInterval(this.interval);
    },

    isCollision() {
        if (this.snake.posY < 0) {
            this.gameOver();
        }

        if (this.snake.posY > 580) {
            this.gameOver();
        }

        if (this.snake.posX < 0) {
            this.gameOver();
        }

        if (this.snake.posX > 780) {
            this.gameOver();
        }
    }

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

window.onload = () => {
    console.info("Snake rodolfo v.1.0")

    game.init()
}