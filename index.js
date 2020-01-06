// Create a function that counts the number of appearences per element
//and return an object with { element : appearences}
function count(arr){
  return arr.reduce((prev, next) => {
    //if object.item doesn't exist, assing 1 to it else, increment it's value
    prev[next] = (prev[next] +1) || 1 
    return prev
  },{})
}

let unique = (obj) => {
  //filters an array of keys selecting only elements wich key is equal to 1 and returns an array with unique elements
  //.map(Number) is necessary because the interger in the array becames a string inside the object
  return Object.keys(obj).filter( key => obj[key] === 1).map(Number)
}

let arr=[2, 2, 3, 4, 4, 5, 5];
let obj = count(arr)
console.log(obj)
console.log(unique(obj))

