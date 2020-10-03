class Mango {
    constructor(x,y){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }

        this.body = Bodies.circle(x,y,40,options);
        World.add(world,this.body);
        this.image = loadImage("images/mango.png");
        this.r = 40;
        this.gameState = "attached";
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,80,80);
    }
}