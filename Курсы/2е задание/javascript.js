'use strict';
let money = +prompt("Ваш бюджет на месяц?", "60000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2019-03-05")

let appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   saving: false

};



for (let i = 0; i < 2; i++) {

   let a = prompt("Введите обязательную статью расходов на месяц", "Введите уникальное название");
   let b = (prompt("Во сколько обойдется?", "Число"));

   if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != '' &&
      b != "" && a.length < 50) {
      console.log('done');
      appData.expenses[a] = b;
   }
}


/*
let n=0;
while(n<2){
   let a = prompt("Введите обязательную статью расходов на месяц", "Введите уникальное название"+(n+1));
   let b = (prompt("Во сколько обойдется?", "Число"));

   if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != '' &&
      b != "" && a.length < 50) {
      console.log('done');
      appData.expenses[a] = b;
      n++;
   }
   else{alert("Ошибка");}
}
*/
/*
let n=0;
do{
   let a = prompt("Введите обязательную статью расходов на месяц", "Введите уникальное название"+(n+1));
   let b = (prompt("Во сколько обойдется?", "Число"));

   if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != '' &&
      b != "" && a.length < 50) {
      console.log('done');
      appData.expenses[a] = b;
      n++;
   }
   else{alert("Ошибка");}
}
while(n<2);
*/

appData.moneyPerDay = money / 30;

alert("Ваш дневной бюджет равен " + appData.moneyPerDay + " рублей");
console.log(JSON.stringify(appData));

if (appData.moneyPerDay < 1500) {
   console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 1500 && appData.moneyPerDay < 3000) {
   console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 3000) {
   console.log("Высокий уровень достатка");
} else(console.log("Произошла ошибка"))