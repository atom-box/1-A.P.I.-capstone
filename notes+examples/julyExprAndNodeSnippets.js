let x = 5;
function myBlock(){
	x *=33;
}
myBlock();
console.log(`1111`);
console.log(x);

/*  
	Confirmed:
		Functions can alter things 
    outside of the block, even 
    though they weren't passed 
    into the block.
*/

let a;
(function(){
	let a = b = 7;
	})();
console.log(a); // UNDEFINED, b/c a is global
console.log(b); // 7, b/c b is global

/*
		
*/

/* https://www.sitepoint.com/5-typical-javascript-interview-exercises/
*/