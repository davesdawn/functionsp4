/*Write a JavaScript function that iterates the integers from 1 to 100. 
But for multiples of three print "Fizz" instead of the number and for 
the multiples of five print "Buzz". For numbers that are multiples of 
both three and five print "FizzBuzz".*/

//Write a function the iterates the intergers from 1 - 100
function multiplesOfNum() {

//Write a FOR Loop the iterates through the intergers
	for (let i = 1; i <= 100; i++) {

//Write a IF statment that checks and acts based on the conditions described in the problem	
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0)	{
		console.log("Buzz");
	} else {
		console.log(i + " is not a multiple of 3, 5 or 15.");
	}	
		}	
}

// Callback function
multiplesOfNum();