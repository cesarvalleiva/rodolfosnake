class BodyTest{
    constructor(ctx,posX, posY, direction){
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.direction = direction
        this.height = 20
        this.width = 20
        this.limits=[]
        this.id=Math.round(Math.random()*100)
        this.imgSprite = new Image()
        this.imgSprite.src = './img/snake_sprite.png'
        this.imgPosX = 0
        this.imgPosY = 20
        this.imgWidth = 20
        this.imgHeight = 20
        this.diameter = 20
        
    }

    move(){
        console.log(this.id)
        console.log(this.limits)
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
    }


    checkDirection(){

        if(this.limits.length>0){
            console.log(this.limits[0])
            switch (this.limits[0].direction) {
                case "n":
                    if (this.posY <= this.limits[0].value) {
                        this.changeDirection(this.limits[0].to)
                    }
                    
                 break;

                case "e":
                    if (this.posX + this.width >= this.limits[0].value) {
                        this.changeDirection(this.limits[0].to)
                    }
                    
                 break;

                case "s":
                    if (this.posY + this.height >= this.limits[0].value) {
                        this.changeDirection(this.limits[0].to)
                    }
                    
                 break;

                case "w":
                    if (this.posX <= this.limits[0].value) {
                        this.changeDirection(this.limits[0].to)
                    }
                    
                 break;

            }
                    
          
        }

    }

    changeDirection(direction){
        console.log(this.limits[0])
        this.limits.shift()
        switch (direction) {
            case 'n':
                this.imgPosX = 60
                break;
            case 'e':
                this.imgPosX = 0
                break;
            case 'w':
                this.imgPosX = 40
                break;
            case 's':
                this.imgPosX = 20
                break;
        }
        this.direction = direction
    }



    draw(){
        //lo de pintar
        this.ctx.drawImage(this.imgSprite, this.imgPosX, this.imgPosY, this.imgWidth, this.imgHeight, this.posX, this.posY, this.diameter, this.diameter)
        // this.ctx.drawImage(this.imgBody, this.posX, this.posY, this.width, this.height)
        // this.ctx.beginPath();
        // this.ctx.fillStyle = "blue";
        // this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
        // this.ctx.closePath();
    }
}