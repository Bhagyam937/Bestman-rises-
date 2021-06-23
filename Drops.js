class Drops{
    constructor(x,y){
      this.rain = Bodies.circle(x,y,5)
      World.add(world,this.rain);
    }
        
    display(){
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,5,5);
    }
    update(){
        if(this.rain.position.y>700){
            Matter.Body.setPosition(this.rain,{x:random(50,400),y:random(50,600)});
        }
    }
}