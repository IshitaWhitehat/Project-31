class Particle{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
        }
        this.body=Bodies.circle(x,y,r,options);
        World.add(world, this.body);
        this.r=r;
        this.color=color(random(0,255),random(0,255),random(0,255));
    }

    display(){
        var pos=this.body.position
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(pos.x,pos.y,this.r,this.r);
    }

}