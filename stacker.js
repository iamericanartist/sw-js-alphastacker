
// var alphabet = "abcdefghijklmnopqrstuvwxyz".split(''); //to generate Array

var alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
	"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log("alphaArray = ", alphaArray);

function stackLetters() {
	var stack = ""; //declare empty stack for in the function to limit scope
	for (var i = 0; i < alphaArray.length; i++){
		stack += alphaArray[i];		//to add each iteration of the array to the stack variable
		if ((i+1) % 5 === 0) { 		//i+1 to move the count to the 1st letter (was starting after a ((index 0)))
			stack += " "; 	//to add the space in the inner IF loop
		}
		console.log(stack);		//logs each iteration AS A LINE (not as a group) but with the scope of the inner variable, it wouldn't be able to console log outside the function anyways
	}
		// console.log(stack);		//logs FINAL ITERATION ONLY - as "stack" is just a string
};
stackLetters(); 




// if (i+5 )
// for (i = 0; i <= .length ; i++)

///////////Call ANY array rather than just the NAMED array
// var alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
// 	"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var betaArray = ["*", "(", "$"];
// console.log("alphaArray = ", alphaArray);

// function stackLetters(myArray) {
// 	var stack = "";
// 	for (var i = 0; i < myArray.length; i++){
// 		stack += myArray[i];
// 		console.log(stack);
// 	}
// }
// stackLetters(alphaArray);
// stackLetters(betaArray);