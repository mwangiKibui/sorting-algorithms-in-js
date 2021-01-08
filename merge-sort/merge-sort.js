
//merging two lists appropriately.
function merge(arr1,arr2){

    //make a new array and have two value pointers
    let res = [], i = 0, j = 0;

    //ensure that the first array is sorted.
    if(arr1.length > 1){
        let min = 0;
        for(let i = 0; i < arr1.length; i++){
            if(i !== min){
                if(arr1[i] < arr1[min]){
                    //also swap the elements
                    [ arr1[i], arr1[min] ] = [ arr1[min], arr1[i]];
                    //change the minimum
                    min = i;
                }
            }
        }
    };

    //ensure also second array is sorted.
    if(arr2.length > 1){
        let min = 0;
        for(let i = 0; i < arr2.length; i++){
            if(i !== min){
                if(arr2[i] < arr2[min]){
                    //also swap the elements
                    [ arr2[i], arr2[min] ] = [ arr2[min], arr2[i]];
                    //change the minimum
                    min = i;
                }
            }
        }
    };

    //we can now compare.
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            res.push(arr1[i]);
            i++;
        }else {
            res.push(arr2[j]);
            j++;
        }
    };

    //pushing the rest of arr1.
    while(i < arr1.length){
        res.push(arr1[i]);
        i++;
    };

    //pushing the rest of arr2.
    while(j < arr2.length){
        res.push(arr2[j]);
        j++;
    }

    return res;
};


//merge sort
function mergeSort(arr){

    //Best case 
    if(arr.length <= 1) return arr;

    //splitting into halves
    let mid = Math.ceil(arr.length / 2);

    let arr1 = arr.slice(0,mid);

    let arr2 = arr.slice(mid);

    let arr1_sublists = [],sorted_arr1_sublists = [];

    let arr2_sublists = [],sorted_arr2_sublists = [];

    //get the first sublist.

    //loop through array 1 making sublists of two elements
    for(let i = 0; i < arr1.length; i+=2){
        arr1_sublists.push(arr1.slice(i,i + 2));
    };

    //loop through array 2 making sublists of two elements.
    for(let i = 0; i < arr2.length; i+=2){
        arr2_sublists.push(arr2.slice(i,i + 2));
    };

    // sorting each sublist of arr1.
    for(let i = 0; i < arr1_sublists.length; i+=2){
        let result = merge(arr1_sublists[i],arr1_sublists[i + 1]);
        result.forEach((value) => sorted_arr1_sublists.push(value));
    };

    // sorting each sublist of arr2.
    for(let i = 0; i < arr2_sublists.length; i+=2){
        let result = merge(arr2_sublists[i],arr2_sublists[i + 1]);
        result.forEach((value) => sorted_arr2_sublists.push(value));
    };


    let result = merge(sorted_arr1_sublists,sorted_arr2_sublists);

    return result;
};

console.log(mergeSort([70,50,30,10,20,40,60]))