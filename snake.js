const PI = Math.PI;
const PI_DOUBLE = PI * 2;

class Snake {
    constructor(ctx, posX, posY, diameter) {
        this.ctx = ctx
        this.direction = "e"
        this.posX = posX
        this.posY = posY
        this.diameter = diameter
        this.body = []
    }

    move() {
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

        switch (this.direction) {
            case 'n':
                this.posY -= 20;
                break;

            case 's':
                this.posY += 20;
                break;

            case 'w':
                this.posX -= 20;
                break;

            case 'e':
                this.posX += 20;
                break;
        }

        if (this.posY < 0) {
            this.posY = 580
        }

        if (this.posY > 580) {
            this.posY = 0
        }

        if (this.posX < 0) {
            this.posX = 780
        }

        if (this.posX > 780) {
            this.posX = 0
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(this.posX, this.posY, this.diameter, this.diameter);
        this.ctx.closePath();
    }

    drawPart(){
        this.body.forEach((_, idx) => {
            this.ctx.beginPath();
            this.ctx.fillStyle = "blue";
            this.ctx.fillRect((this.posX + this.diameter) + (this.diameter*idx), this.posY, this.diameter, this.diameter);
            this.ctx.closePath();
        })
    }
}
