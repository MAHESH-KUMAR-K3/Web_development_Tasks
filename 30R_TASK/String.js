
// Here's a list of common JavaScript string methods:
// .................................................................................................
// .......1. `charAt(index)` - Returns the character at the specified index..........

// const char1="Hello JavaScript";
// console.log(char1.charAt(9))


//....using named function...
// function specific_indexed(name){
//     return name.charAt(6);
// }
// const word= "Karunakar";
// console.log(specific_indexed(word))
// --------------------------------------------------------------------------------------------------


// .............................................................................................
// 2. `concat(str1, str2, ...)` - Joins two or more strings
// const add="Hello";
// console.log(add.concat(" mahesh"))


// ...method 2.....
// const add1="Hello";
// const add2="mahesh"
// console.log(`${add1} `.concat(add2))


// .......using named function..............
// function concating(word){
//     return word.concat();
// }
// const name="mahi";
// const name2="  hello";
// console.log(name.concat(name2))
// ..............................................................................................




// ..............................................................................................
// 3. `includes(searchString, position)` - Checks if a string contains another strin
// const name="Mahesh Kumar"
// console.log(name.includes("sh"))



// // using function....
// function search_string(name1){
//     return name1.includes("india")
      
// }
// const string1="Hello india"
// console.log(string1)
// ..............................................................................................




// ..............................................................................................
// 4. `indexOf(searchValue, fromIndex)` - Returns the position of the first occurrence of a value
// const name2="10000 coders";
// console.log(name2.indexOf("c",10)) 
  
//   // Function declaration
//   function lastIndexOfFunc(str, search, fromIndex) {
//     return str.lastIndexOf(search, fromIndex);
//   }
//   console.log(lastIndexOfFunc("Mahesh kumar","0",2));


  
//   // Anonymous function (typically used in callbacks)
//   const lastIndexOfResult = (function(str, search, fromIndex) {
//     return str.lastIndexOf(search, fromIndex);
//   })("Hello world", "o", 10);
//   console.log(lastIndexOfResult)
  

//   // Arrow function
//   const lastIndexOfArrow = (str, search, fromIndex) => str.lastIndexOf(search, fromIndex);
//   console.log(lastIndexOfArrow("Hello world", "o", 10)); 
// ..............................................................................................



// ..............................................................................................
// 5. `lastIndexOf(searchValue, fromIndex)` - Returns the position of the last occurrence of a value
// function lastIndexOfFunc(str, search, fromIndex) {
//     return str.lastIndexOf(search, fromIndex);
//   }
  
//   // Anonymous function (typically used in callbacks)
//   const lastIndexOfResult = (function(str, search, fromIndex) {
//     return str.lastIndexOf(search, fromIndex);
//   })("Hello world", "o", 10);
  
//   // Arrow function
//   const lastIndexOfArrow = (str, search, fromIndex) => str.lastIndexOf(search, fromIndex);
  
//   // Example usage
//   console.log(lastIndexOfVar("Hello world", "o", 10)); // 7
//   console.log(lastIndexOfFunc("Hello world", "o", 10)); // 7
//   console.log(lastIndexOfResult); // 7
//   console.log(lastIndexOfArrow("Hello world", "o", 10)); // 7
// ..............................................................................................





// ..............................................................................................
// 6. `match(regexp)` - Searches a string for a match against a regular expression






// ..............................................................................................



// ..............................................................................................
// 7. `replace(searchFor, replaceWith)` - Replaces text in a string
// const browserType = "mozilla";
// const updated = browserType.replace("moz", "van");
// console.log(updated); // "vanilla"
// console.log(browserType); // "mozilla"


// Nmed functions.....
// function updated(name4){
//     return name4.replace("KUMAR","kuruma")
// }
// const word1="MAHESH KUMAR";
// console.log(updated(word1))

// //annonimus funmction.....
// const greet= function(str){
//     return str.replace("hello" ,"india")
// }
// const word2="hello bharath"
// console.log(greet(word2))


// // arrow function....
// const greet2=(str2)=>str2.replace("india","bharth");
// const str2="india is so beatiful"
// console.log(greet2(str2))
// ..............................................................................................






// ..............................................................................................
// 8. `replaceAll(searchFor, replaceWith)` - Replaces all occurrences of text in a string
const str4="Hello world, world is nice."
console.log(str4.replaceAll(""))





// arrow function......
const greet3=(str2)=>str2.replaceAll("world","india");
const str3="Hello world, world is nice."
console.log(greet3(str3))





// ..............................................................................................
// 9. `search(regexp)` - Searches a string for a specified value or regular expression
// 10. `slice(start, end)` - Extracts a part of a string and returns it
// 11. `split(separator, limit)` - Splits a string into an array of substrings
// 12. `substring(start, end)` - Extracts characters from a string between two specified indices
// 13. `toLowerCase()` - Converts a string to lowercase
// 14. `toUpperCase()` - Converts a string to uppercase
// 15. `trim()` - Removes whitespace from both ends of a string
// 16. `trimStart()` / `trimLeft()` - Removes whitespace from the beginning of a string
// 17. `trimEnd()` / `trimRight()` - Removes whitespace from the end of a string
// 18. `startsWith(searchString, position)` - Checks if a string begins with specified characters
// 19. `endsWith(searchString, length)` - Checks if a string ends with specified characters
// 20. `padStart(targetLength, padString)` - Pads the current string from the start
// 21. `padEnd(targetLength, padString)` - Pads the current string from the end
// 22. `repeat(count)` - Returns a new string with a specified number of copies
// 23. `charCodeAt(index)` - Returns the Unicode of the character at the specified index
// 24. `codePointAt(pos)` - Returns a Unicode code point value
// 25. `localeCompare(compareString)` - Compares two strings in the current locale

// Would you like me to explain any of these methods in more detail?