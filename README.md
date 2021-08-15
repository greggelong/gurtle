# gurtle

a very simple turtle graphics class called gurtle, uses polar cooridinates

This class will help implement some recursive code discussions using turtle graphics

that I have come across in other Programming languages such as prolog and

python.

I have in the sketch part a simple koch curve derived from code originally in a 1988

paper on prolog and recursion.
https://www.researchgate.net/publication/221536954_Teaching_recursion_using_fractals_in_Prolog

I also have a recursive tree function tree, derived from a discussion of recursion in 

python. 
https://runestone.academy/runestone/books/published/pythonds/Recursion/pythondsintro-VisualizingRecursion.html

https://runestone.academy/runestone/books/published/pythonds/index.html

## The gurtle object
So this gurtle class has functions:
- forward
- backward
- left 
- right
- pushIt 
- popIt
- it also keeps tract of angle and color

The pushIt and popIt are a stack that keeps track of x, y and angle

so you can push and pop back to a previous position

if you are doing recursive trees in L-systems you need this push and pop

but you don't if you are just doing a recursive tree with the turtle alone.

## sketch

in the draw function the koch is called by one turtle and 

the tree is called by the other. 

the trees angle is mapped to the mouseX

see it live:

https://greggelong.github.io/gurtle/



## link to a gurtle template on the P5 web editor

https://editor.p5js.org/greggelong/sketches/afr9muFbw







