class Gurtle{

  constructor(x,y,clr){
    this.x = x; 
    this.y = y;
    this.clr = clr;
    this.angle = 0;
  }

  forward(amt){
    // using polar cooridinates
    stroke(this.clr);
    let x2 = this.x + amt * cos(this.angle);
    let y2 = this.y + amt * sin(this.angle);
    line(this.x,this.y,x2,y2);
    //set the x and y to new position
    this.x = x2;
    this.y = y2;
  }

  right(deg){
    this.angle += deg;

  }

  left(deg){
    this.angle -=deg;
  }




}