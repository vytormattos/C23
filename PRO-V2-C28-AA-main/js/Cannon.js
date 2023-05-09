class Cannon{
    constructor(x,y,w,h,angle){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.angle=angle
        this.CannonImage=loadImage("./assets/canon.png")
        this.cannonBase=loadImage("./assets/cannonBase.png")

    }

  display() {
  if ( keyDown(RIGHT_)) {

  }

    push ();
    translate (this.x,this.y)
    rotate (this.angle)
    imageMode (CENTER)
    image (this.CannonImage,0,0,this.w,this.h)
    pop ();
    image(this.cannonBase,70,20,200,200)
    noFill ()
  } 

 

}