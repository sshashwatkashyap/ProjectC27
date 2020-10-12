class Rope{

 constructor(BodyA, BodyB){
   
  var options={
   
   bodyA :BodyA,
   bodyB :BodyB,
   stiffness :0.0001,
   length :2	  
   
  }
   
  this.chain = Matter.Constraint.create(options);
  World.add(world, this.chain);	 
   
 }	
   
 display(){
   
  var pointA = this.chain.bodyA.position
  var pointB = this.chain.bodyB.position
   
  strokeWeight(3)	 
  fill("red")
  line(pointA.x, pointA.y, pointB.x, pointB.y);
   
 }
}
   
   