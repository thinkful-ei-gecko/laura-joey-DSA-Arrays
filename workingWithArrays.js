//QUESTION 5 URLify a string

function fixBlanks(string){
  let newString = string.split(' ').join('%20');
  return newString;
}
// console.log(fixBlanks('in the garden'));

function fixBlanks2(string){
  let newstring = '';
  for(let i=0; i<string.length; i++){
    if(string[i] === ' '){
      newstring += '%20';
    }
    else if(string[i] !== ' '){
      newstring += string[i];
    }
  }
  return newstring;
}
console.log(fixBlanks2('no blanks here'));


//QUESTION 6 Filtering an array
function filterArray(array){
  let newArray = [];
  for(let i=0; i<array.length; i++){
    if(array[i]>=5){
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(filterArray([8,2,9,4,11,3,1,7]));


function filter(arr, filterFunc) {
  const filterArr = []; 
  for(let i=0;i<arr.length;i++) {        
    const result = filterFunc(arr[i], i, arr);       
    if(result) {            
      filterArr.push(arr[i]); 
    }    
  }    
  return filterArr;
}
const arr = [8, 3, 7, 6];
const lessThanFive = filter(arr, num => num > 4);
// console.log(lessThanFive);


//QUESTION 7 Maximum sum
//this version finds the highest sum of any two adjacent array items
function arrSum(arr){
  let sum = 0;
  for(let i=0; i<arr.length; i++) {
    let newSum = arr[i] + arr[i + 1];
    if(newSum > sum){
      sum = newSum;
    }
  }
  return sum;
}
// console.log(arrSum([6,21,4,9,8,5,19,9,2]));


//QUESTION 8 Merge arrays

function merge(arr1, arr2){
  let newArr = arr1.concat(arr2);
  newArr.sort((a, b) => {  
    return a-b;
  });
  return newArr;
}
let arr1 = [1, 3, 6, 8, 11];
let arr2 = [2, 3, 5, 8, 9, 10];
// console.log(merge(arr1, arr2));


//QUESTION 9 Remove characters
function removeChars(string){
  // const vowels = ('a' || 'e');
  
  // let newString = '';
  // for(let i = 0; i < string.length; i++ ){
  //   if(string[i] !== vowels){
  //     newString = newString.concat(string[i]);
  //   }
  // }
  let newString = string.replace(/a/g, '').replace(/e/g, '').replace(/i/g, '').replace(/o/g, '').replace(/u/g, '');
  return newString;
}
// console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));


//QUESTION 10 Products
function products(arr){
  let newArr =[];
  for(let i = 0; i < arr.length; i++){
    let tempArr = arr.filter(item => item !== arr[i]);
    let product = 1;
    for(let j=0; j<tempArr.length; j++){
      product = product * tempArr[j];
    }  
    newArr.push(product);
  }  
  return newArr;
}
console.log(products([1,2,3,4,5]));


//QUESTION 11 2D Array


//QUESTION 12 String Rotation
function stringRotation(str1,str2){
  console.log(str1, str2);
}
