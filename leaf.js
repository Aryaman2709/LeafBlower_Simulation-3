class Leaf{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,50,50, options);
        World.add(world,this.body);
        this.image = loadImage("leaf.png");
    }
   
   
    display(){
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0, this.width, this.height)        
        pop();
    }
}