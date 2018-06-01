// Evan mistergenest@twitter April 2, 2018
// Throw an error and catch it
// just a vanilla j.s. sandbox snippet!  From memory. 

// DON'T EDIT.  THE FIVE EXAMPLES ARE USEFUL AT BOTTOM

function fireworks(a){  
// 6/1: key to understanding:
// You're telling it, 'Grab the first thing passed in'.
	let mudhens = [];

	try{
		console.log(`Passed in ${a}-thing has _${a.length}_ elements.`);
	} catch(e) {
		console.log(`errOne is ${e}`);
		console.log(`errOne length is ${e.length}`);
	}

	try {
		mudhens = Array.from(a);
	} catch(e) {
		console.log(`errTwo is ${e}`);
		console.log(`errTwo length is ${e.length}`);
	}

	try{
		console.log(`Arrayified created thing has _${mudhens.length}_ elements.`);
	} catch(e) {
		console.log(`errThree is ${e}`);
		console.log(`errThree length is ${e.length}`);
	}


	for(let x of mudhens){
		console.log(`[${x}] `);
	}
	console.log("==========");
}


// THE FOLLOWING ARE ALL SUCCESFUL
fireworks("woof"); 		// works.  gives w-o-o-f
fireworks(3, "woof"); 	// not work.   error is 100% silent!
fireworks("woof", 3); 	// not work.   error is 100% silent!
fireworks();			// not work.  runs the code in CATCH
fireworks(undefined);	// not work.  runs the code in catch
fireworks([3, "woof"]);	// works. gives 3 - woof

// calling this "ent.js" because my mnemonic:

// DRY      CATCH ERROR       E.N.T. bkwds

// try{} catch(error){}       throw new Error("yuck" + error);