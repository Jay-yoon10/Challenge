
// const  toReverse = "reverse"
 

// const reverseString = (toReverse) => {
//   const newArray = toReverse.split("").reverse().join("")
//   console.log(newArray)
//   return ;
// };

// console.log(reverseString(toReverse))

// const charcterArr =["X", "B", "B", "b", "g", "l", "n", "x"]
// const abcd = "abcdef"
// const lowerCaseCharArr = "dloejmixwrsnfacqyukvhtgzpb".split("");
//   const upperCaseCharArr = "DLOEJMIXWRSNFACQYUKVHTGZPB".split("");
//   const sortedCharArr = "abcdefghijklmnopqrstuvwxyz".split("");
//   const mixedCaseArr = [...lowerCaseCharArr, ...upperCaseCharArr];
// const sortCharactersAlphabetically = (mixedCaseArr) => {
  
//   const newArray = mixedCaseArr.map((char) => char.toLowerCase()).sort()
//   return newArray

// };
// console.log(sortCharactersAlphabetically(mixedCaseArr))

// const numberArr = [6, 9, 55, 2, 9190, .5];


// const sortNumbersHighToLow = (numberArr) => {
//   const descending = numberArr.sort(function (a, b) {
//     return(b - a)})
//  return descending;
// };
// console.log(sortNumbersHighToLow(numberArr))
//  const toCheck = "orange";


//  const checkItemInstock = (toCheck) => {
//   const stockList = [
//     "apple",
//     "banana",
//     "orange",
//     "coconut",
//     "strawberry",
//     "lime",
//     "grapefruit",
//     "lemon",
//     "kumquat",
//     "blueberry",
//     "melon",
//   ];

//   const stockIndex = stockList.includes(toCheck)? `${toCheck} is instock, it is on aisle ${stockList.indexOf(toCheck)}` : `Sorry ${toCheck} is not instock`
//   // return stockIndex;
//   console.log(stockIndex)
//   // stockIndex = stockList.indexOf(toCheck) ? `${toCheck} is instock, it is on aisle ${stockIndex}` : `Sorry ${toCheck} is not instock`
//   // return stockIndex;
// };

// console.log(checkItemInstock(toCheck))

// * A function that takes an array of colours and checks if EVERY colour is a primary colour.
//  * The primary colours are ["red", "blue", "yellow"].
//  * It will return true if they are ALL primary.
//  * It will return false if they are NOT ALL primary.
//  *
// const coloursArr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// //  * @return {boolean} false
// //  */

// const checkPrimaryColours = (coloursArr) => {
//   const primaryColours = ["red", "blue", "yellow"];
//   const colourClass = coloursArr.every((colour)=> primaryColours.includes(colour))
//   return colourClass;
// };

// console.log(checkPrimaryColours(coloursArr))

// * A function that takes a strings and checks to see if it is a palindrome.
//  * PALINDROME - a word, phrase, or sequence that reads the same backwards as forwards.
//  * It will return true or false depending if it is a palindrome or not.
// //  *
//  const stringOne = "racecar"
// //  * @return {boolean} true
// const reversedStr = stringOne.split("").reverse().join("")
// console.log(reversedStr)
// const checkStringPalindrome = (stringOne) => {
//   const reversedStr = stringOne.split("").reverse().join("")

//   const isEqual = reversedStr === stringOne ? true : false;
//   return isEqual
// };

// console.log(checkStringPalindrome(stringOne))

// * A function that totals a nested array of scores arrays.
//  * It only needs to total each nested array.
//  * e.g. [[1, 2], [2, 3]] = [3, 5]
//  * The scores will be numbers.
//  *
//  const scoresArr = [[7, 7, 6], [2, 3, 2], [3]]
//  * @return {number[]} [20, 7, 3]
//  */

//  const scoresArr = [7, 7, 6, 2, 3, 2, 3]
// // * @return {number} 30
// // */
// const totalScoresArr = (scoresArr) => {
//  const Total = scoresArr.reduce((acc, cur) => 
//    (acc + cur ))

 
//  return Total;
// };
// console.log(totalScoresArr(scoresArr))

//  const totalNestedScoresArr = (scoresArr) => {
//    const total = scoresArr.map(totalScoresArr)
  
//   return total;
// };

// console.log(totalNestedScoresArr(scoresArr))

 const toEncrypt = "encrypted"
// * @return {string} "ertnyecpd"
// */

 const encryptString = (toEncrypt) => {
  const stringToArray = toEncrypt.split("")
  const newArray = stringToArray.reduce((acc, currentV, Index) => {
  const resetPoint = Index % 3; acc[resetPoint].push(currentV)}
  )
 return newArray;
};

console.log(encryptString(toEncrypt))