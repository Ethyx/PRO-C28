class Chain {
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.005,
            length:0
        }

        this.constraint = Constraint.create(options);
        World.add(world,this.constraint);

        this.PointB = pointB
    }

    fly(){
        this.constraint.bodyA = null;
    }

    attach(body){
        this.constraint.bodyA = body;
    }

    display(){
        if(this.constraint.bodyA !== null) {
            var PointA = this.constraint.bodyA.position;

            strokeWeight(3);
            line(this.PointB.x,this.PointB.y,PointA.x,PointA.y);
        }
    }
}