let x = 5;
function myBlock(){
	x *=33;
}
myBlock();
console.log(x);

/*  
	Confirmed:
		Functions can alter things 
    outside of the block, even 
    though they weren't passed 
    into the block.
*/

