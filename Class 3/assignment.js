//  1. Print odd numbers in an array 
arr = [1,2,3,4,5];

(function (arr){
    for (ele of arr){
        if (ele % 2 === 1){
            console.log(ele)
        }
    }
})(arr);

// 2. 