// # JavaScript Array Methods
// JavaScript arrays come with many built-in methods that make working with collections of data easier. Here are the most commonly used array methods:

// ## Basic Array Methods
// .................................................................................................
// - **push()**: Adds elements to the end of an array
// let arr = [1, 2, 3, 4, 5];
// arr.push(6);
// console.log("After pop:", arr);

// ..........named function......
// function add_element(arr) {
//   arr.push(6);
//   return arr;
// }
// let array1 = [1, 2, 3, 4, 5];
// console.log("After Push:", add_element(array1)); // It will add 6 to the array and print it

//......annonimus function.........
// let add_element = function(arr) {
//   arr.push(6);
//   return arr;
// };
// array1=[1,2,4,5]
// console.log("After Push:", add_element(array1));

// arrow function..........
// let add_element1 = (arr1) => {
//   arr1.push(7);
//   return arr1;
// };
// let arr = [1, 2, 3, 4, 5];
// console.log(add_element1(arr));
// .................................................................................................




// .................................................................................................
// - **pop()**: Removes the last element from an array
// const remove_element=[1,2,3,4,6];
// remove_element.pop()
// console.log(remove_element)

// named function.........
// function remove_element1(rem){
//   rem.pop();
//   return rem;
// }
// const rem1=[1,2,3,4,6];
// console.log(remove_element1(rem1))

//annonymus function..............
// const remove2 = function (rem2) {
//   rem2.pop();
//   return rem2;
// };
// const rem3 = [1, 2, 3, 4, 6];
// console.log(remove2(rem3));

// // arrow function
// const remove3 = (rem2) => {
//   rem2.pop();
//   return rem2
// };
// const rem4=[1,4,2,3,22,123,122];
// console.log(remove3(rem4))
// .................................................................................................




// .................................................................................................
// - **shift()**: Removes the first element from an array
// const rem_first_ele = [1, 2, 4, 5, 6, "mahesh"];
// rem_first_ele.shift(); //we cont store variable we can write like this only...
// console.log(rem_first_ele);

// // named function.....
// function rem_ele(a) {
//   a.shift();
//   return a;
// }
// a1 = [1, 2, 3, "mahesh", "naveen"];
// console.log(rem_ele(a1));

// //annonimyus function..........
// const rem_e = function (aa) {
//   aa.shift();
//   return aa;
// };
// const aa1 = ["mahi", "minni", "sai", "ammu"];
// console.log(rem_e(aa1));

// // arrow function......
// const rem_ele1 = (aaa) => {
//   aaa.shift();
//   return aaa
// };
// const aaa1 = ["mahi", "minni", "sai", "ammu"];
// console.log(rem_ele1(aaa1))
// .................................................................................................





// .................................................................................................
// - **unshift()**: Adds elements to the beginning of an array
// const rem_first_ele = [1, 2, 4, 5, 6, "mahesh"];
// rem_first_ele.unshift(23); //we cont store variable we can write like this only...
// console.log(rem_first_ele);

// // named function.....
// function rem_ele(a) {
//   a.unshift("mahesh");
//   return a;
// }
// a1 = [1, 2, 3, "mahesh", "naveen"];
// console.log(rem_ele(a1));

// //annonimyus function..........
// const rem_e = function (aa) {
//   aa.unshift("a");
//   return aa;
// };
// const aa1 = ["mahi", "minni", "sai", "ammu"];
// console.log(rem_e(aa1));

// // arrow function......
// const rem_ele1 = (aaa) => {
//   aaa.unshift("v");
//   return aaa
// };
// const aaa1 = ["mahi", "minni", "sai", "ammu"];
// console.log(rem_ele1(aaa1))
// .................................................................................................





// .................................................................................................
// - **concat()**: Combines two or more arrays





// .................................................................................................

// - **slice()**: Returns a shallow copy of a portion of an array
// - **splice()**: Changes array contents by removing, replacing, or adding elements

// ## Iteration Methods

// - **forEach()**: Executes a function for each array element
// - **map()**: Creates a new array with the results of calling a function on every element
// - **filter()**: Creates a new array with elements that pass a test
// - **reduce()**: Reduces the array to a single value by executing a function
// - **every()**: Checks if all elements pass a test
// - **some()**: Checks if at least one element passes a test

// ## Finding Elements

// - **find()**: Returns the first element that passes a test
// - **findIndex()**: Returns the index of the first element that passes a test
// - **indexOf()**: Returns the first index at which a given element is found
// - **lastIndexOf()**: Returns the last index at which a given element is found
// - **includes()**: Determines whether an array includes a certain value
//
// mahesh

// ## Array Transformation

// - **sort()**: Sorts the elements of an array
// - **reverse()**: Reverses the order of elements in an array
// - **flat()**: Creates a new array with sub-array elements concatenated
// - **flatMap()**: Maps each element using a mapping function, then flattens

// Would you like me to provide examples of how to use any of these methods?

// const obj={
//     name:"mahesh",
//     village:"uppal",
//     towen:"hydrabad",
//     state:"telangana",
// }

// console.log(Object.keys(obj))
// for (i=0;i<Object.keys(obj).length;i++){
//     console.log(Object.keys[0])
// }

// let numbers = [4, 1, 10, 2];
// numbers.sort(function(a, b) {
//   return a - b; // Sorting in ascending order
// });
// console.log(numbers); // Output: [1, 2, 4, 10]
