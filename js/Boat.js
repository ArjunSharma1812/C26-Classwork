class Boat{
    constructor(x, y, w ,h, boatPos){
        var options = {
            isStatic: false,
            restitution: 0.08,
            friction:1,
            density:1,
        }
        this.body = Bodies.rectangle(x, y, w, h , options);
        this.width = w;
        this.height = h;
        this.boatPos = boatPos;
        this.img = loadImage("./assets/boat.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.img, 0, this.boatPos,this.width, this.height);
        pop();
    }
    remove(index){
       World.remove(world, boats[index].body);
       boats.splice(index, 1);  
    }
}