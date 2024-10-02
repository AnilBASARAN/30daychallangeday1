// find the max value in an array of numbers

const maxValue =(numArray)=> {
    let max = -Infinity;
    for(let number of numArray){
        if(number > max) max = number;
    }
    return max;
}

// tester
const test1= [1,3,-10,5,8,33,-12];
const answer1 = 33;
const testerFunction=(funct,testCase,answer)=> funct(testCase) == answer ? "PASSED THE TEST" : "FAILED THE TEST";

console.log(testerFunction(maxValue,test1,answer1));