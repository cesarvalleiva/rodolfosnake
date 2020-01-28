class Background {
    constructor(ctx) {
        this.ctx = ctx;

    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = '#00cc00';
        this.ctx.fillRect(0, 0, game.w, game.h);
        this.ctx.closePath();
    }
}