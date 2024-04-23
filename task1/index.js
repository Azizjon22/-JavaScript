// Дано число. Выведите в консоль первую цифру этого числа.

function numbers(num) {
  let numberStr = num.toString();

  return numberStr[0];
}

console.log(numbers(727));

// Дано число. Выведите в консоль последнюю цифру этого числа.

function number(num) {
  let numberStr = num.toString();

  return numberStr[numberStr.length - 1];
}

console.log(number(7278));

// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
function getsum(num) {
  let numberStr = num.toString();

  let frist = parseInt(numberStr[0]);

  let last = parseInt(numberStr[numberStr.length - 1]);

  return (frist += last);
}

console.log(getsum(951449));

// Дано число. Выведите количество цифр в этом числе.

function count(num) {
  let countStr = num.toString();

  return countStr.length;
}

console.log(count(15615615651151566514654564456544));


// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

function testNumber(num1,num2){
    let test1 = num1.toString();
    let test2 = num2.toString()

    if(test1[0] === test2[0]){
        console.log('bir xil');
    }else{
        console.log('bir xil emas');
    }
}

testNumber(312,312)
testNumber(757,575)
testNumber(444,517)
testNumber(855,800)