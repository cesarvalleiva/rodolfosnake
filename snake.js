const PI = Math.PI;
const PI_DOUBLE = PI * 2;

class Snake {
    constructor(ctx, posX, posY, diameter) {
        this.ctx = ctx
        this.direction = undefined
        this.posX = posX
        this.posY = posY
        this.directions = []
        this.diameter = diameter
        this.body = []
        this.imgSprite = new Image()
        this.imgSprite.src = './img/snake_sprite.png'
        this.imgPosX = 0
        this.imgPosY = 0
        this.imgWidth = diameter
        this.imgHeight = diameter

    }

    move() {
     
        window.onkeydown = e => {
            if (e.keyCode === 39) {

                if (this.direction === 'n' || this.direction === 's') {
                    if (this.body.length > 0) {
                        if (this.direction === "n") {
                            this.body.forEach((element) => {
                                element.limits.push({ direction: "n", value: this.posY, to: "e" })
                            });

                        } else {
                            this.body.forEach((element) => {
                                element.limits.push({ direction: "s", value: this.posY + this.diameter, to: "e" })
                            });
                        }
                    }
                }
                this.direction = 'e'
                this.imgPosX=0
            }
            if (e.keyCode === 37) {

                if (this.direction === 'n' || this.direction === 's') {
                    if (this.body.length > 0) {
                        if (this.direction === "n") {
                            this.body.forEach((element) => {
                                element.limits.push({ direction: "n", value: this.posY, to: "w" })
                            });

                        } else {
                            this.body.forEach((element) => {
                                element.limits.push({ direction: "s", value: this.posY + this.diameter, to: "w" })
                            });
                        }
                    }
                    this.direction = 'w';
                    this.imgPosX = 40

                }
            }
            if (e.keyCode === 40) {

                if (this.direction === 'w' || this.direction === 'e') {
                    if (this.body.length > 0) {
                        if (this.direction === "w") {

                            this.body.forEach((element) => {
                                element.limits.push({ direction: "w", value: this.posX, to: "s" })
                            });

                        } else {
                            this.body.forEach((element) => {
                                element.limits.push({ direction: "e", value: this.posX + this.diameter, to: "s" })
                            });
                        }
                    }
                    // this.direction === "w" ? this.limitW = this.posX : this.limitE = this.posX + 20;
                    // console.log(this.limitN, this.limitE, this.limitS, this.limitW)

                    this.direction = 's';
                    this.imgPosX = 20
                    //  console.log(this.directions)
                }
            }
            if (e.keyCode === 38) {

                if (this.direction === 'w' || this.direction === 'e') {
                    if (this.body.length > 0) {
                        if (this.direction === "w") {
                            this.body.forEach((element) => {
                                element.limits.push({ direction: "w", value: this.posX, to: "n" })
                            });

                        } else {
                            this.body.forEach((element) => {
                                element.limits.push({ direction: "e", value: this.posX + this.diameter, to: "n" })
                            });
                        }
                        // this.direction === "w" ? this.limitW = this.posX + 20 : this.limitE = this.posX;
                        // console.log(this.limitN, this.limitE, this.limitS, this.limitW)
                    }
                    this.direction = 'n';
                    this.imgPosX = 60


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

        // if (this.posY < 0) {
        //     this.gameOver();
        // }

        // if (this.posY > 580) {
        //     this.gameOver();
        // }

        // if (this.posX < 0) {
        //     this.gameOver();
        // }

        // if (this.posX > 780) {
        //     this.gameOver();
        // }
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
        this.ctx.drawImage(this.imgSprite,this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.posX, this.posY, this.diameter, this.diameter)
        // this.ctx.beginPath();
        // this.ctx.fillStyle = "green";
        // this.ctx.fillRect(this.posX, this.posY, this.diameter, this.diameter);
        // this.ctx.closePath();
    }

    // drawBody() {

    //     // this.body.forEach((part, idx) => {

    //     //     this.ctx.beginPath();
    //     //     this.ctx.fillStyle = "blue";
    //     //     this.ctx.fillRect(10, 10*idx, this.diameter, this.diameter);
    //     //     this.ctx.closePath();
    //     // })

    //     this.body.forEach((part, idx) => {
    //         this.ctx.beginPath();
    //         this.ctx.fillStyle = "blue";
    //         if (this.direction == 'e' && part.positionX === this.directions.currentX) {
    //             part.direction = this.direction.newDirection
    //             console.log(part.direction);
    //             this.paint(part.direction, idx);
    //         } else {
    //             this.paint(this.direction, idx);
    //         }
    //         if (this.direction == 's' && part.positionY === this.directions.currentY) {
    //             part.direction = this.direction.newDirection
    //             this.paint(part.direction, idx);
    //         } else {
    //             this.paint(this.direction, idx);
    //         }
    //         if (this.direction == 'w' && part.positionX === this.directions.currentX) {
    //             part.direction = this.direction.newDirection
    //             this.paint(part.direction, idx);
    //         } else {
    //             this.paint(this.direction, idx);
    //         }
    //         if (this.direction == 'n' && part.positionY === this.directions.currentY) {   
    //             part.direction = this.direction.newDirection
    //             this.paint(part.direction, idx);
    //         } else {
    //             this.paint(this.direction, idx);
    //         }
    //         this.ctx.closePath();
    //     })
    // }

    // paint(direction, idx) {
    //     switch (direction) {
    //         case 'n':
    //             this.ctx.fillRect(this.posX, (this.posY + this.diameter) + (this.diameter * idx), this.diameter, this.diameter);
    //             break;

    //         case 'e':
    //             this.ctx.fillRect((this.posX - this.diameter) - (this.diameter * idx), this.posY, this.diameter, this.diameter);
    //             break;

    //         case 's':
    //             this.ctx.fillRect(this.posX, (this.posY - this.diameter) - (this.diameter * idx), this.diameter, this.diameter);
    //             break;

    //         case 'w':
    //             this.ctx.fillRect((this.posX + this.diameter) + (this.diameter * idx), this.posY, this.diameter, this.diameter);
    //             break;
    //     }
    // }
}
