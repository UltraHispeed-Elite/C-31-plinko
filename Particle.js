class Particle{
    constructor(x, y, radius) {
        var options = {
            isStatic:false,
            'restitution':0.4,
            'friction':1.0,
         
        }
        this.radius = radius;
this.x=x;
this.y=y;
     

        
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.angle
        push();
        translate(pos.x, pos.y);
        rotate(angle);
 
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}