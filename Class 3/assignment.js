//  1. Print odd numbers in an array 
arr = [1,2,3,4,5];

(function (arr){
    for (ele of arr){
        if (ele % 2 === 1){
            console.log(ele)
        }
    }
})(arr);

var result = function(arr){
    for (ele of arr){
        if (ele % 2 === 1){
            console.log(ele)
        }
    }
}
result(arr)


// 2. Convert all the strings to title caps in a string array 
(function (arr){
    for (let ele of arr){
        console.log(ele.charAt(0).toUpperCase()+ele.substr(1).toLowerCase())
    }
})(arr);

var result = function(arr){
    for (let ele of arr){
        console.log(ele.charAt(0).toUpperCase()+ele.substr(1).toLowerCase())
    }
}
result(arr)

// 3. Sum of all numbers in an array 

(function (arr){
    var sum
    for (let ele of arr){
        sum += ele
    }
    return sum
})(arr);

var result = function(arr){
    var sum
    for (let ele of arr){
        sum += ele
    }
    return sum
}
result(arr)


// 4. Return all the prime numbers in an array 

var arr = arr.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });

console.log(arr)

// 5. Return all the palindromes in an array

var reverse = str => [...str].reverse().join('');

function isPalindrome(str){
    if(str == reverse(str)){
        return true
    }
    return false
}

arr = ["mukul", "muum"]
for ( let ele of arr){
    if (isPalindrome(ele)){
        console.log(ele)
    }
}


// 6. Remove duplicates from an array

function removeDuplicate(arr){
    var obj = {}
    for ( let ele of arr){
        obj[ele] = true
    }
    return Object.keys(obj)
}


// 7. Rotate an array by k times and return the rotated array
var arr = [1,2,3,4,6]

function rotatearray(arr,num){
    var arr2 = new Array(arr.length)
    for ( let i=0;i< arr.length; i++){
        final_index = (i+num) % arr.length
        arr2[final_index] = arr[i]
    }
    return arr2
}
