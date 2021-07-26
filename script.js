let greg;
let mj;


function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
  background(255);

  greg = new Gurtle(10,height/2,color(255,0,0));
  mj = new Gurtle(10, height-10, color(255,255,0));
  //sqr(greg);
  //sqr(mj);
  //koch(greg, 5, 500);
  //koch(mj,3,500);
  //instru();

  // set up for tree
  greg.x = width/2
  greg.y = height;
  greg.angle = -90;
  // call tree
  //tree(greg,100, 20);
}

function draw(){
  background(50);
  mj.x = 1;
  mj.y = height/2
  koch(mj,3,599);
  angle = map(mouseX,0, width,10,180);
  tree(greg,100,mouseX);


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




function tree(t, size, angle){
  //background(255);
  // set the tree at the bottom
  
  if (size < 2){
     return;
  }else{
    // draw tree
    t.forward(size);
    t.right(angle);
    tree(t,size-15,angle);
    t.left(angle*2);
    tree(t,size-15,angle);
    t.right(angle);
    t.backward(size);
    
  }
   
}


