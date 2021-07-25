let greg;
let mj;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  greg = new Gurtle(width/2,height/2,color(255,0,0));
  mj = new Gurtle(width/4, height/4, color(0,0,255));
  sqr(greg);
  sqr(mj);
}

function instru(){
  background(255);
  
  greg.forward(100);
  mj.forward(50)
  
  greg.right(90);
  mj.right(60);
  greg.forward(100);
  mj.forward(50)


}

function sqr(obj){
  for (let i=0; i<4;i++){
    obj.forward(100)
    obj.right(90)
  }
}