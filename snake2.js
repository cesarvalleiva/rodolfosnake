const PI = Math.PI;
const PI_DOUBLE = PI * 2;

class Snake {
    constructor(ctx, posX, posY, diameter) {
        this.ctx = ctx
        this.direction = "e"
        this.posX = posX
        this.posY = posY
        this.limits = []
        this.diameter = diameter
        this.body = []

    }

    move() {
        window.onkeydown = e => {
            if (e.keyCode === 39) {
                if (this.direction === 'n' || this.direction === 's') {
                    this.limits.push({
                        x: this.posX,
                        y: this.posY
                    })
                this.direction = 'e'
                console.log(this.limits)
            }
            if (e.keyCode === 37) {
                if (this.direction === 'n' || this.direction === 's') {
                    if (this.direction === "n") {
                        this.body.forEach((element) => {
                            element.limits.push({ n: this.posY + this.diameter })
                        });
                    } else {
                        this.body.forEach((element) => {
                            element.limits.push({ s: this.posY })
                        });
                    }
                    this.direction = 'w';

                }
            }
            if (e.keyCode === 40) {
                if (this.direction === 'w' || this.direction === 'e') {
                    if (this.direction === "w") {
                        this.body.forEach((element) => {
                            element.limits.push({ w: this.posX })
                        });
                    } else {
                        this.body.forEach((element) => {
                            element.limits.push({ e: this.posX + this.diameter })
                        });
                    }
                    // this.direction === "w" ? this.limitW = this.posX : this.limitE = this.posX + 20;
                    // console.log(this.limitN, this.limitE, this.limitS, this.limitW)

                    this.direction = 's';

                    //  console.log(this.directions)
                }
            }
            if (e.keyCode === 38) {
                if (this.direction === 'w' || this.direction === 'e') {
                    if (this.direction === "w") {
                        this.body.forEach((element) => {
                            element.limits.push({ w: this.posX })
                        });
                    } else {
                        this.body.forEach((element) => {
                            element.limits.push({ e: this.posX + this.diameter })
                        });
                    }
                    // this.direction === "w" ? this.limitW = this.posX + 20 : this.limitE = this.posX;
                    // console.log(this.limitN, this.limitE, this.limitS, this.limitW)

                    this.direction = 'n';


                    //  console.log(this.directions)
                }
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
            this.posY = 0
        }

        if (this.posY > 580) {
            this.posY = 580
        }

        if (this.posX < 0) {
            this.posX = 0
        }

        if (this.posX > 780) {
            this.posX = 780
        }
    }
}

    moveBody() {
        
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(this.posX, this.posY, this.diameter, this.diameter);
        this.ctx.closePath();
    }

    drawBody() {

    }
