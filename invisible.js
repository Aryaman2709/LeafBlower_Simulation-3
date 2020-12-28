class Invisible{
    constructor(x,y, width, height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,this.width, this.height, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
    }
}