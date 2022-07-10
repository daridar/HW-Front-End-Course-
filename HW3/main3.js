//функція 1
let number = +prompt('Введіть число: ')
function getMaxDigit(number) {
    let largest = 0;
    while(number){
        let r = number % 10;
        largest = Math.max(r, largest)
        number = parseInt(number / 10);
    }
    console.log(largest);
}
getMaxDigit(number)

//функція 3
let yourName = prompt('Введіть ім`я:');
function capitalLetter(yourName){
        let newYourName = yourName[0].toUpperCase() + yourName.slice(1).toLowerCase()
        console.log(newYourName)
}

capitalLetter(yourName)

//функція 4
let num = +prompt('Введіть суму зарплати:')
function tax(num){
    let salary = num -((num * 19.5) / 100);
    alert(`Ваша зарплата з урахуванням податків:` + salary)
}
tax(num)

//функція 5
let N = +prompt('Введіть початок діпазону')
let M = +prompt('Введіть кінець діапазону')
function getRandomNumber(N,M){
    let ranNumber = Math.floor(Math.random() * M-N+1) + N
    alert(ranNumber)
}
getRandomNumber(N,M)

//функція 6
let yourWord = prompt('Введіть ваше слово: ')
let subYourWord = prompt('Літера:')
function countLetter(yourWord, subYourWord){
    let subYourWordCount = 0;
    for(let i =0; i < yourWord.length; i++){
    if (yourWord.charAt(i) === subYourWord) {
        subYourWordCount +=1;
    }
}
    return alert('Кількість літери' + ' ' + subYourWord + ' ' + 'в слові' + ' ' + subYourWordCount);
}
countLetter(yourWord, subYourWord);

//функція 11
function deleteLetters(yourLetters, yourLet){
yourLet = yourLet.split(yourLetters).join("")
return console.log(yourLet)}
deleteLetters('c', 'claclacla');


//функція 7
let sum = +prompt('Введіть вашу суму для конвертації валют($ або UAH)')
let currency = prompt('Введіть вашу валюту', '$/UAH')
function convertCurrency(sum, currency){
    if(currency == '$'){
        let sumConvert = sum * 25 ;
        alert('Конвертуємо вашу суму з доларів в гривні - ' + ' ' + sumConvert+'UAH')
    }
    if(currency == 'UAH'){
        sumConvert = sum / 25;
        alert('Конвертуємо вашу суму з гривні в долари - ' + ' ' + sumConvert+'$')
    }
}
convertCurrency(sum, currency);

//функція 9
let lenPass = +prompt('Введіть бажану довжину вашого паролю: ');
function getRandomPassword(lenPass){
    if(lenPass > 1 && lenPass <= 8){
        let passwordsRan = Math.floor(Math.pow(10, lenPass-1) +Math.random() * (Math.pow(10, lenPass) - (Math.pow(10, lenPass - 1 ) - 1)))
        alert('Згенерований пароль: ' + passwordsRan)
    }
    else {
        passwordsRan = Math.floor(1000000 + Math.random() * 100000000 - 999999)
        alert('Згенерований пароль (може бути не більше 8 символів): ' + passwordsRan)
    }
}
getRandomPassword(lenPass)

   
//функція 12
function isPalindrome(str) {
    str = str.replace(/\W/g, '')
    str = str.toLowerCase();
    let checkStr = '';
    for (let i = str.length - 1; i >= 0; --i) {
      checkStr += str[i];
    }
    return str == checkStr;
  }

console.log(isPalindrome('Я несу гусеня'))