class Body {
    constructor(ctx, posX, posY, direction, diameter) {
        this.ctx = ctx
        this.direction = direction
        this.posX = undefined
        this.posY = undefined
        this.diameter = diameter
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(this.posX, this.posY, this.diameter, this.diameter);
        this.ctx.closePath();
    }
}
