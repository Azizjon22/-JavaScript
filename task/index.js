// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль. (1)

function checkNum(num) {
    if(num < 0){
        console.log('manfiy son');
    }else if(num === 0){
        console.log('bu 0 ga teng');
    }else{
        console.log('musbat son');
    }
}

checkNum(5)
checkNum(-5)
checkNum(0)


// Дана строка. Выведите в консоль длину этой строки.(2)

function stringL(str) {
    return str.length
}

console.log(stringL('Hello'));

// Дана строка. Выведите в консоль последний символ строки.(3)
function stringR(str) {
    return str.slice(-1)
}

console.log(stringR('aziz'));

// Дано число. Проверьте, четное оно или нет.(4)

function checkEvent(number) {
    if (number % 2 === 0) {
      console.log("Bu son juft");
    } else {
      console.log("Bu son toq");
    }
  }
  
  checkEvent(4);  
  checkEvent(7);  

// Даны два слова. Проверьте, что первые буквы этих слов совпадают.(5)
  function stringTrue(srt1, srt2){
    if(srt1[0] === srt2[0]){
        console.log('bir xil');
    }else{
        console.log('ikki xil');
    }
  }
  
  stringTrue('yes' , 'no')

  