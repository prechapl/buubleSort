
function bubbleSort(array) {
    let iters = array.length;

    /* your code here */
    if (array.length === 0){
        return [];
    }

    while (scan(array)){
        for (let i = 0; i < array.length - 1; i++){
            if (array[i] > array[i + 1]){
            array = swap(array, i, i + 1);
            }
        }
    }
    return array;
}

function swap(arr, i, j){
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;
}

// let array1 = [1,2,3,5,4];
let array2 = [2,1,5,4,3,6,9,99];

// console.log(bubbleSort(array1));
console.log(bubbleSort(array2));

function scan(arr){
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] > arr[i+1]){
            return true;
        }
    }
    return false;
}