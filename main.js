// Fizz＆Buzzの初期値を格納する定数
const MultipleFizz = 3;
const MultipleBuzz = 5;
// Fizz＆Buzzに何回倍数をかけたかを管理する変数
let FizzMultipleCount = 1;
let BuzzMultipleCount = 1;

// Fizz＆Buzzぞれぞれの値を管理する変数
let outputValueFizz = 0;
let outputValueBuzz = 0;

for (let i = 0; i <= 100; i++) {
    
    // Fizz＆Buzzの値を計算
    outputValueFizz = MultipleFizz * FizzMultipleCount;
    outputValueBuzz = MultipleBuzz * BuzzMultipleCount;

    if(outputValueFizz >= 100) {
        // Fizzが100以上でforを抜ける(Fizzの方が値が小さいためFizzで判定)
        break;
    }
    

    if (outputValueFizz === outputValueBuzz) {
         if (outputValueFizz < 100) {
            // 値が100より小さいとき出力
            console.log(`FizzBuzz ${outputValueFizz}`);
            FizzMultipleCount++;
            BuzzMultipleCount++;
        }   
    } else if (outputValueBuzz - outputValueFizz >= 3  ) {
        // FizzとBuzzの差が3より大きい時は、Fizzのみ出力
        if (outputValueFizz < 100) {
            // 値が100より小さいとき出力
            console.log(`Fizz ${outputValueFizz}`);
            FizzMultipleCount++;
        }
    } else {
        if (outputValueFizz < 100) {
            // 値が100より小さいとき出力
            console.log(`Fizz ${outputValueFizz}`);
            FizzMultipleCount++;
        }
        if (outputValueBuzz < 100) {
            // 値が100より小さいとき出力
            console.log(`Buzz ${outputValueBuzz}`);
            BuzzMultipleCount++;
        }
    }
}