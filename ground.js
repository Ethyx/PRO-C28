class Ground {
    constructor() {
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(width/2,height-10,width*2,20,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,width,20);
    }
}