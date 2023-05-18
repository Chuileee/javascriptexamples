//function of multiplication
function multiplication(num1,num2){
    return num1*num2;
}
console.log(multiplication(3,2));

//arrow function
const multiplicationArrow = (num1,num2) => num1*num2;

console.log(multiplicationArrow(10,2));

//declare array with elements

let numbers =[11,22,33,44];

/* for(i=0;i<numbers.length;i++){
    console.log(numbers[i]*numbers[i]);
} */

const squares = numbers.map(num =>num*num); //map function will do all 4 numbers
console.log(squares);


squares.forEach(numSquare =>{
    if(numSquare%2 ===0){
        console.log(numSquare);
    }
});

//these are 3 different way to use the arrow function