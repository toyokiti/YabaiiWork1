// Fizz＆Buzzの初期値を格納する定数
const MultipleFizz = 3;
const MultipleBuzz = 5;

for (let i = 1; i < 100; i++) {
    
    // Fizz＆Buzzの倍数のとき
    if(i % MultipleFizz === 0 && i % MultipleBuzz === 0) {
        console.log(`FizzBuzz ${i}`);
    }
    
    // Fizzの倍数のとき
    if(i % MultipleFizz === 0) {
        console.log(`Fizz ${i}`);
    } 
    
    // Buzzの倍数のとき
    if(i % MultipleBuzz ===0) {
        console.log(`Buzz ${i}`);
    } 
}