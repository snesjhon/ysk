// Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.

// For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.

// You solution should return an array [smallest, minimumAbsent, largest]

// The smallest integer should be the integer from the array with the lowest value.

// The largest integer should be the integer from the array with the highest value.

// The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.

// -----

// function high(x) {
//   const alphabet = ["", ..."abcdefghijklmnopqrstuvwxyz"];
//   let splitStr = x.split(" ");
//   let score = { name: "", sum: 0 };
//   splitStr
//     .map(e => e.split(""))
//     .forEach(sum => {
//       const item = sum.reduce((a, c) => {
//         a = a + alphabet.indexOf(c);
//         return a;
//       }, 0);
//       if (item > score.sum) {
//         score.name = sum.join("");
//         score.sum = item;
//       }
//     });
//   return score.name;
// }

// // const alphabet =

// high("what time are we climbing up the volcano"); //?

// splitStr.forEach(e => {
// 	let word = e.split('');

// 	word //?

// 	word.reduce((a, c) => {
// 		c
// 		alphabet.indexOf(c) //?

// 		a = alphabet.indexOf(c)
// 		return a;
// 	})

// 	// sumStr.push(word.reduce((a, c) => alphabet.indexOf(c)))
// 	// word
// 	// word.forEach(e => {
// 	// 	console.log(e)
// 	// 	// sumStr.push(alphabet.indexOf(e))
// 	// })
// })

// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case).

// Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
// Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
// Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
// Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")

// function toCamelCase(str){
// 	let split = str.includes("_") ? str.split("_") : str.split("-");
// 	for(var i = 1; i < split.length; i++){
// 		split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1)
// 	}
// 	return split.join("");
// }

// toCamelCase(""); //?
// toCamelCase("the_stealth_warrior"); //?
// toCamelCase("The-stealth-warrior"); //?
// toCamelCase("A-B-C") //?

function inArray(array1, array2) {
  let split = array1.map(e => e.split(""));
  array2.forEach(e => {
    const alt = e.split("");
  });
}

inArray(
  ["arp", "live", "strong"],
  ["lively", "alive", "harp", "sharp", "armstrong"]
);
