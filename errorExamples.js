// Evan mistergenest@twitter April 2, 2018
// Throw an error and catch it
// just a vanilla j.s. sandbox snippet!  From memory. 

// DON'T EDIT.  THE FIVE EXAMPLES ARE USEFUL AT BOTTOM

function fireworks(a){
	let mudhens = [];
	console.log("==========");
	try {
		mudhens = Array.from(a);
	} catch(error) {
		console.log('sleep');
		//return; 
	}
	try{
		console.log(`Passed-in thing has _${a.length}_ elements.`);
		console.log(`Arrayified created-thing has _${mudhens.length}_ elements.`);
	} catch(e) {
		// do nothing ha ha ha ha ha
	}
	for(let x of mudhens){
		console.log(`[${x}] `);
	}
}


// THE FOLLOWING ARE ALL SUCCESFUL
fireworks("woof"); 		// works.  gives w-o-o-f
fireworks(3, "woof"); 	// not work.   error is 100% silent!
fireworks();			// not work.  runs the code in CATCH
fireworks(undefined);	// not work.  runs the code in catch
fireworks([3, "woof"]);	// works. gives 3 - woof

// calling this "ent.js" because my mnemonic:

// DRY      CATCH ERROR       E.N.T. bkwds

// try{} catch(error){}       throw new Error("yuck" + error);