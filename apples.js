

class Apple {
    constructor(ctx, posX, posY, size, imgApple) {
        this.ctx = ctx;
        this.width = 23;
        this.height = 23;
        this.posX = posX
        this.posY = posY
        this.imgApple = new Image()
        this.imgApple.src = './img/apple.png'
    }

    draw() {
            this.ctx.drawImage(this.imgApple, this.posX, this.posY, this.width, this.height)
    //     this.ctx.beginPath();
    //     this.ctx.fillStyle = "red";
    //     this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    //     this.ctx.closePath();
    }
    
}
