

class Apple {
    constructor(ctx, posX, posY, size, imgApple) {
        this.ctx = ctx;
        this.width = 20;
        this.height = 20;
        this.posX = posX
        this.posY = posY
        this.imgApple = new Image()
        this.imgApple.src = './img/apple.png'
    }

    draw() {
            this.ctx.drawImage(this.imgApple, this.posX, this.posY, this.width, this.height)
    }
    
}
