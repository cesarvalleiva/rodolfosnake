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
        this.limitPos = undefined

    }

    move() {
        window.onkeydown = e => {
            if (e.keyCode === 39) {
                this.direction = 'e';
                this.limitPos = { x: this.posX, y: this.posY }
            }
            if (e.keyCode === 37) {
                this.direction = 'w';
                this.limitPos = { x: this.posX, y: this.posY }
            }
            if (e.keyCode === 40) {
                this.direction = 's';
                this.limitPos = { x: this.posX, y: this.posY }
            }
            if (e.keyCode === 38) {
                this.direction = 'n';
                this.limitPos = { x: this.posX, y: this.posY }
            }
        }

        switch (this.direction) {
            case 'n':
                this.posY -= 20;
                this.body.forEach((element, idx) => {
                    element.posY = this.posY + 20 * (idx + 1)
                });
                break;

            case 's':
                this.posY += 20;
                this.body.forEach((element, idx) => {
                    element.posY = this.posY - 20 * (idx + 1)
                });
                break;

            case 'w':
                this.posX -= 20;
                this.body.forEach((element, idx) => {
                    element.posX = this.posX - 20 * (idx + 1)
                });
                break;

            case 'e':
                this.posX += 20;
                this.body.forEach((element, idx) => {
                    element.posX = this.posX + 20 * (idx + 1)
                });
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

    moveBody() {
        // this.body.forEach((element, idx) => {
        //     if(element.position.x === this.limitPos.x && element.position.y === this.limitPos.y){
        //         element.direction = this.direction
        //     } else {
        //         element.direction
        //     }
        //     console.log(element.direction)
        // })



        // this.body.forEach(element => {
        //     switch (element.direction) {
        //         case 'n':
        //             if(element.position.y <= this.limitPos.y){
        //                 console.log("n")
        //                 element.direction = this.direction
        //                 break;
        //             } else {
        //             element.posY -= 20;
        //                 console.log("position y: " + element.position.y)
        //                 break;
        //             }


        //         case 's':
        //             if (element.position.y >= this.limitPos.y) {
        //                 element.direction = this.direction
        //                 console.log("s")
        //                 break;
        //             } else {
        //                 element.posY += 20;
        //                 break;
        //             }

        //         case 'w':
        //             if (element.position.x >= this.limitPos.x) {
        //                 element.direction = this.direction
        //                 console.log("w")
        //                 break;
        //             } else {
        //                 element.posX -= 20;
        //                 break;
        //             }

        //         case 'e':
        //             if (element.position.x <= this.limitPos.x){
        //                 console.log("e")
        //                 element.direction = this.direction
        //                 break;
        //             } else {
        //                 element.posX += 20;
        //                 break;
        //             }
        //     }
        // })
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(this.posX, this.posY, this.diameter, this.diameter);
        this.ctx.closePath();
    }

    drawBody() {

        this.body.forEach((part) => {

            this.ctx.beginPath();
            this.ctx.fillStyle = "blue";
            this.ctx.fillRect(part.posX, part.posY, this.diameter, this.diameter);
            this.ctx.closePath();
        })
        // this.body.forEach((_, idx) => {
        //     this.ctx.beginPath();
        //     this.ctx.fillStyle = "blue";
        //     if (this.direction == 'e') {
        //         this.ctx.fillRect((this.posX - this.diameter) - (this.diameter * idx), this.posY, this.diameter, this.diameter);
        //     }
        //     if (this.direction == 's') {
        //         this.ctx.fillRect(this.posX, (this.posY - this.diameter) - (this.diameter * idx), this.diameter, this.diameter);
        //     }
        //     if (this.direction == 'w') {
        //         this.ctx.fillRect((this.posX + this.diameter) + (this.diameter * idx), this.posY, this.diameter, this.diameter);
        //     }
        //     if (this.direction == 'n') {
        //         this.ctx.fillRect(this.posX, (this.posY + this.diameter) + (this.diameter * idx), this.diameter, this.diameter);
        //     }
        //     this.ctx.closePath();
        // })
    }
}
