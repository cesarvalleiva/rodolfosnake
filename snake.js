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
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(this.posX, this.posY, this.diameter, this.diameter);
        this.ctx.closePath();

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
            this.posY = 600
        }

        if (this.posY > 600) {
            this.posY = 0
        }

        if (this.posX < 0) {
            this.posX = 800
        }

        if (this.posX > 800) {
            this.posX = 0
        }

        console.log("snake", this.posX, this.posY)
        // this.direction = undefined
    }
}
