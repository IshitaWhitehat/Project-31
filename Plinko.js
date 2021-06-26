class Plinko{
    constructor(x,y,r){
        var options={
            isStatic:true,
        }
        this.body=Bodies.circle(x,y,r,options);
        World.add(world, this.body);
        this.r=r;
    }

    display(){
        var pos=this.body.position
        ellipseMode(RADIUS);
        fill(255);
        ellipse(pos.x,pos.y,this.r,this.r);
    }

}