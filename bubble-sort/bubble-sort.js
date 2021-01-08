function bubbleSort(arr){
    //The outer pass
    for(let i = 0; i < arr.length; i++){
        //The inner pass
        for(let j = 0; j < arr.length - i - 1; j++){

            //Value comparison
            
            if(arr[j + 1] < arr[j]){
                //do the swapping
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    };
    return arr;
};

console.log(bubbleSort([5,3,8,4,6]));