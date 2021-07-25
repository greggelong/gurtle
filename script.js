let greg;
let mj;


function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
  background(255);

  greg = new Gurtle(10,height/2,color(255,0,0));
  mj = new Gurtle(10, height-10, color(0,0,255));
  //sqr(greg);
  //sqr(mj);
  koch(greg, 5, 500);
  koch(mj,3,500);
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


function koch(t, order, size){
  if (order == 0){
    t.forward(size);

  }else{
    koch(t, order-1, size/3)   // Go 1/3 of the way
    t.left(60)
    koch(t, order-1, size/3)
    t.right(120)
    koch(t, order-1, size/3)
    t.left(60)
    koch(t, order-1, size/3)
  }

}