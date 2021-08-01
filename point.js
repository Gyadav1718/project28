class Loncher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        this.loncher= Constraint.create(options);
        World.add(myWorld, this.loncher);
    }
    fly(){
        this.loncher.bodyA=null;
    }
      display(){
          if(this.loncher.bodyA){
            var ppA = this.bodyA.position;
            var ppB = this.pointB;
            strokeWeight(4);
            line(ppA.x, ppA.y, ppB.x, ppB.y);
          }
            
        
    }
    
}
