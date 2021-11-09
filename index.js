//write your code here
function average(numbers){
    let avg = 0;
    for(let i = 0; i < numbers.length; i++){
        avg += numbers[i];
    }
    avg = avg/numbers.length;
    return avg;
}
 
console.log(average([1, 2, 3, 4, 5]));