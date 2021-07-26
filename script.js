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
  //koch(greg, 5, 500);
  koch(mj,3,500);
  instru();
}

function instru(){
  background(255);
  greg.x = width/2
  greg.y = height;
  greg.angle = -90;
  greg.forward(100);
  greg.pushIt()
  greg.right(45);
  greg.forward(100/3);
  greg.popIt();
  greg.left(45);
  greg.forward(100/3);


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

function tree(t, size){
  background(255);
  // set the tree at the bottom
  t.x = width/2
  t.y = height;
  t.angle = -90;
  if (size < 2){
     console.log("over")
  }else{
    
  }


}


