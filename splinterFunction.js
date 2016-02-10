//Take your project and add a 'Splinter' function. The function should take in 2 numbers, multiply them together saved under a locally scoped variable called 'z'. Then create an array that stores the first argument, second argument, and z. Return that array.

//Then console log out the Splinter function, passing in 1 and 2.

//Check all of this in to a repo called "prime_prestudy_bonus_week_04"


function splinter( num1, num2 ) {
	var z = num1 * num2
	var array = [num1, num2, z];
	return array
 }
console.log(splinter(1,2));