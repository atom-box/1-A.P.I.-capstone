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
	for (; i < inputted.virtue; i++){
		console.log("First attempt to blow your mind.");
	}
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