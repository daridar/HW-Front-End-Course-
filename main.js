const water = 15.687
const oil = 123.965
const butter = 90.2345


const max = Math.max(water, oil, butter)
console.log(max);
const min = Math.min(water, oil, butter)
console.log(min);

//сума всіх товарів
const sum = water + oil + butter
console.log(sum);

//булеве значення
const boolSum = sum % 2 === 0;
console.log(Boolean(boolSum));

//округлення суми всіх товарів в меншу сторону
const roundedNum = Math.floor(water) + Math.floor(butter) + Math.floor(oil);
console.log(roundedNum);
 
//округлення до сотень
const roundNum = Math.round((sum) / 100) * 100
console.log(roundNum);

//сума решти
const payment = 500;
const result = payment - sum;
console.log(result);

//середнє значення цін
const averageSum = sum/3;
const averagePrice = averageSum.toFixed(2);
console.log(averagePrice);

//випадкова знижка
const randomSale = Math.floor(Math.random() * 100);
console.log(randomSale);

//сума до сплати з випадковою знижкою
const salePrice = sum - ((sum * randomSale) / 100);
console.log(salePrice.toFixed(2));

//чистий прибуток
const cost = (Math.floor(sum)) / 2;
const netProfit = cost - ((Math.floor(sum) * randomSale)/100)
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
     <p><i>Сума до сплати з випадковою знижкою:</i></p>${salePrice.toFixed(2)}
     <p><i>Чистий прибуток:</i></p>${netProfit.toFixed(2)}
    `
)
