class Box{
constructor(x,y,width,height){
    var b1 = {
        restitution:1,
        density:0.8
    
    }
    this.width=width
    this.height=height
    this.body=Bodies.rectangle(x,y,width,height,b1)
    World.add(world,this.body)
}
display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER);
    rect(0,0,this.width,this.height)
    pop()
}


}