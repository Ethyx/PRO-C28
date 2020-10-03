class Stone {
    constructor(x,y,r){

        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.body = Bodies.circle(x,y,r-15,options);
        World.add(world,this.body);

        this.image = loadImage("images/stone.png");
        this.x = x;
        this.y = y;
        this.r = r*2;
    }

    attach(){
        this.body.position.x = this.x;
        this.body.position.y = this.y;
    }

    display(){
        this.x = this.body.position.x;
        this.y = this.body.position.y;

        imageMode(CENTER);
        image(this.image,this.x,this.y,this.r,this.r);
    }
} 