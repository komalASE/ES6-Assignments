
//custom map function or polyfill for map function update

let arr1 = [1,2,3,4,5,6]
function polyfillForMap(arr1, callBack){
    let newArr = [];
    for(let i=0;  i<arr.length; i++){
        newArr.push(callBack(arr1[i]));
    }
    return newArr;
}

function square(num){
    return num*num;
}

console.log(polyfillForMap(arr1, square));

//---------------------------------------------------------------------------------------------------



 // polyfill for filter function

 let arr2 = [1,5,21,988,6,44,21];
 function polyfillForFilter(arr2, callBack){
    let newArr = [];
    for(let i=0; i<arr2.length; i++){
        if(callBack(arr2[i])){
            newArr.push(arr2[i]);
        }
    }
    return newArr;
 }

 function isEven(num){
    if(num%2===0){
        return num;
    }
 }

 console.log(polyfillForFilter(arr2, isEven));  

 //-----------------------------------------------------------------------------------------------------

 /* polyfill for Reduce */

let arr = [10,2,3,4,5];
function reduce(arr , callBack){
    let accumalator = arr[0];
    for(let i=1 ; i<arr.length ; i++){
        acc = callBack(arr[i],accumalator );
    }
    return accumalator;
}
function sum(num,accumalator){
    return num*accumalator;
}
console.log(reduce(arr , sum ));



