//Time out to throw and catch an error
// @mistergenest May 31, 2018

//receive args

console.log("Begin.");
console.log(arguments[0].length + "...was what I saw.");
console.log("End.");

const inputted = { virtue: "compassion",
	pillars: 5};

try{
	let i = 0;
	for (; i < inputted.viiiirtue; i++){
		console.log("First attempt to blow your mind.");
	}
	// This deliberate error is failing silently  :^(
} catch(e) 	{
	if(e){
	console.log("Poo -- there was an error.");

	} else {
	console.log("Yay -- there was no error.");

	}
}

try{
	i = 0;
	for (; i < inputted.pillars; i++){
		console.log("Second attempt to blow your mind.");
	}
} catch(e) 	{
	if(e){
	console.log("Poo -- there was an error.");

	} else {
	console.log("Yay -- there was no error.");

	}
}

/**************************/
function myFunction() {
    var message, x;
    try {
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high";
    }
    catch(err) {
			console.log("Poo -- there was an error.");
	// This deliberate error is failing silently  :^(
			
    }
}
