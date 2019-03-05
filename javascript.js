'use strict'; 
let money = prompt("Ваш бюджет на месяц?","60000");
console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD","2019-03-05")
console.log(time);

let appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    saving:false

};

for(let i=0;i<2;i++){
    let point = prompt("Введите обязательную статью расходов на месяц","Введите уникальное название");
 //   console.log(point);
    appData.expenses[point]=(prompt("Во сколько обойдется?","Число"));
 //   console.log(JSON.stringify(answerExpenses));
}
let oneDayBudget=money/30;
alert("Ваш дневной бюджет равен "+oneDayBudget+" рублей");
console.log(JSON.stringify(appData));