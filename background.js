class Background {
    constructor(ctx) {
        this.ctx = ctx;
        this.posX = 0
        this.posY = 0
        this.width = 800
        this.height = 600
        this.imgBg = new Image()
        this.imgBg.src = './img/bg-patron.png'
    }

    draw(){
        this.ctx.drawImage(this.imgBg, this.posX, this.posY, this.width, this.height)
    }
}