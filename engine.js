const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.style.width = `${CW}px`
canvas.style.height = `${CH}px`

class Screen{
    constructor(width, height){
        this.width = width
        this.height = height
        this.buffer = ctx.createImageData(this.width, this.height)
    }

    fillScreen(){
        for(var x=0;x<this.width;x++){
            for(var y=0;y<this.height;y++){
                this.setPixel(x,y,8)
            }
        }
    }

    setPixel(x, y, c){
        var r; var g; var b;

        switch (c){
            case 0:r=255;g=255;b=0;break;
            case 1:r=160;g=160;b=0;break;
            case 2:r=0;g=255;b=0;break;
            case 3:r=0;g=160;b=0;break;
            case 4:r=0;g=255;b=255;break;
            case 5:r=0;g=160;b=160;break;
            case 6:r=160;g=100;b=0;break;
            case 7:r=110;g=50;b=0;break;
            case 8:r=0;g=60;b=130;break;
            default:r=0;g=0;b=0;break;
        }


        if(c==0){r=255;g=255;b=0};
        if(c==1){r=160;g=160;b=0};
        if(c==2){r=0;g=255;b=0};
        if(c==3){r=0;g=160;b=0};
        if(c==4){r=0;g=255;b=255};
        if(c==5){r=0;g=160;b=160};
        if(c==6){r=160;g=100;b=0};
        if(c==7){r=110;g=50;b=0};
        if(c==8){r=0;g=60;b=130};

        const index = (y * this.width + x) * 4;
        this.buffer.data[index] = r;
        this.buffer.data[index + 1] = g;
        this.buffer.data[index + 2] = b;
        this.buffer.data[index + 3] = 255; // Opacità fissa a 255
    }

    updateScreen() {
        ctx.putImageData(this.buffer, 0, 0);
    }

    draw3D(){
        for(var x=0;x<SH;x++){
            for(var y=0;y<CW2;y++){
                this.setPixel(x,y,8)
            }
        }
    }
}

class Time{
    constructor(){
        this.fr1
        this.fr2
    }
}

class Keys{
    constructor(){
        this.w; this.s; this.a; this.d;
        this.sl; this.sr;
        this.m
    }
}

class Player{
    constructor(){
        this.keys = new Keys
    }

    movePlayer(){
        if(this.keys.w==1&&this.keys.m==0){console.log("left")}
        if(this.keys.a==1&&this.keys.m==0){console.log("right")}
        if(this.keys.s==1&&this.keys.m==0){console.log("up")}
        if(this.keys.d==1&&this.keys.m==0){console.log("down")}
        
        if(this.keys.sr==1){console.log("strafe left")}
        if(this.keys.sl==1){console.log("strafe right")}
        
        if(this.keys.w==1&&this.keys.m==1){console.log("look up")}
        if(this.keys.a==1&&this.keys.m==1){console.log("look down")}
        if(this.keys.s==1&&this.keys.m==1){console.log("move up")}
        if(this.keys.d==1&&this.keys.m==1){console.log("move down")}
    }
}

class Game{
    constructor(){
        this.tick
        this.screen = new Screen(CW, CH)
        this.player = new Player
    }
}

game = new Game
game.screen.draw3D()
game.screen.update()