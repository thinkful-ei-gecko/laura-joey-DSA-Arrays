//Q5 URLify a string

function fixBlanks(string){
  let newString = string.split(' ').join('%20');
  return newString;
}
console.log(fixBlanks('in the garden'));


function filterArray(array){
  let newArray = [];
  let item;

  for(let i=0; i<array.length; i++){
    if(array[i]<5){
      item = array.slice(i, 1);
    }
    newArray.push(item);

    return newArray;
  }
}
console.log(filterArray([8, 3, 7, 6, 2, 9, 1]));

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


  const oddArr2 = filter(arr, num => num % 2 === 0);