let numbers = [4,5,7,2];

//The outer passes.

for(let i = 0; i < numbers.length; i++){

    //The inner passes
    for(let j = 0; j < numbers.length - i; j++){

        //Value comparison
        if(numbers[j + 1] < numbers[j]){

            //The swapping.
            [numbers[j + 1],numbers[j]] = [numbers[j],numbers[j + 1]]
        }
    }
}

console.log(numbers)