

class Apple {
    constructor(ctx, posX, posY, size) {
        this.ctx = ctx;
        this.width = size;
        this.height = size;
        this.posX = posX
        this.posY = posY

        console.log("apple", posX, posY)
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
        this.ctx.closePath();
    }
}