
// 数字と数字の差分の1サイクルを配列に格納
let arrCycle = [2, 1, 3, 1, 2, 3];
// FizzとBuzzの1サイクルを配列に格納
let arrFizzBuzz = ['Buzz', 'Fizz', 'Fizz', 'Buzz', 'Fizz', 'FizzBuzz'];
let outputValue = 0;
// Fizz~FizzBuzzを1サイクルとしてループを回す回数
let LoopTimes = 7;

for (let i = 0; i < LoopTimes; i++){

    outputValue += 3;
    console.log('Fizz ' + outputValue);
    
    for (let j = 0; j < arrCycle.length; j++) {
        outputValue += arrCycle[j];
        if (outputValue <= 99) {
            console.log(arrFizzBuzz[j] +' '+ outputValue);
        }
    }
}
