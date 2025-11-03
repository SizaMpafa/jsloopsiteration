// TODO: Create an array called numbers with values 1 through 5
console.log("------------------------------------------");
const numbers = [1, 2, 3, 4, 5]
console.log(numbers);
console.log("------------------------------------------");
// TODO: Write a for loop that prints each number in the array
numbers.forEach((number) =>{
    console.log(number);
});
// TODO: Write a while loop that counts down from 5 to 1
console.log("------------------------------------------");
let n = 5
while (n >= 1) {
    console.log(n);
    n -= 1 // n --
}
console.log("------------------------------------------");
// TODO: Create a loop that prints only even numbers from the numbers array
for (let n = 0; n < numbers.length; n++) {
    if (numbers[n] % 2 === 0) {   
        console.log(numbers[n]);
    }
}
console.log("------------------------------------------");
// TODO: Create a loop that calculates the sum of all numbers in the array
let sum = 0
for (let n = 0; n < numbers.length; n++) {
    sum += numbers[n];
}
console.log(sum);
console.log("------------------------------------------");
