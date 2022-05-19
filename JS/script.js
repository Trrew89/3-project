"use strict";

function showFirstMessage(text){
    console.log(text);

}

showFirstMessage("Hello World");

function calc (a, b){
    return (a+b);
}
console.log(calc(3,4));

const logger = function (){
    console.log("hello");
};

logger();

const calc2 = (a, b) => { return a+b;}; 


function getMathResult(int1, int2) {
    
    let number = int1;
    let string = '';
    if (int2 !== number && int2 <=0){
        return int1;
    }else {
        for (let i =1; i <= int2; i++){
            if (i == int2){
            string += `${int1 * i}`;
        } else{
            string += `${int1 * i}---`;
        }
    return string;
    }
}
}

console.log(getMathResult(5, 3));