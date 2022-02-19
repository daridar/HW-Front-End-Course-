let water = 15.687
let oil = 123.965
let butter = 90.2345

//

let max = Math.max(water, oil, butter)
console.log(max);
let min = Math.min(water, oil, butter)
console.log(min);

//сума всіх товарів
let sum = water + oil + butter
console.log(sum);

//округлення суми всіх товарів в меншу сторону
let roundedNum = Math.floor(water) + Math.floor(butter) + Math.floor(oil);
console.log(roundedNum);
 

console.log(even(x))
//округлення до сотень
let roundNum = Math.round((sum) / 100) * 100
console.log(roundNum);

//сума решти
let payment = 500;
let result = payment - sum;
console.log(result);

//середнє значення цін
let averageSum = sum/3;
let averagePrice = averageSum.toFixed(2);
console.log(averagePrice);

//випадкова знижка
let randomSale = Math.floor(Math.random() * 100);
console.log(randomSale);

//сума до сплати з випадковою знижкою
let salePrice = sum - ((sum * randomSale) / 100);
console.log(salePrice.toFixed(2));

//чистий прибуток
let cost = (Math.floor(sum)) / 2;
let netProfit = cost - ((Math.floor(sum) * randomSale)/100)
console.log(netProfit.toFixed(2));

document.writeln (
    `<p><i>Максимальна ціна:</i></p>${max}
     <p><i>Мінімальна ціна:</i></p>${min}
     <p><i>Вартість всіх товарів:</i></p>${sum}
     <p><i>Округлення суми всіх товарів в меншу сторону:</i></p>${roundedNum}
     <p><i>Округлення до сотих:</i></p>${roundNum}
     <p><i>Сума решти:</i></p>${result}
     <p><i>Середнє значення цін:</i></p>${averagePrice}
     <p><i>Випадкова знижка:</i></p>${randomSale}
     <p><i>Сума до сплати з випадковою знижкою:</i></p>${salePrice}
     <p><i>Чистий прибуток:</i></p>${netProfit}
    `
)
