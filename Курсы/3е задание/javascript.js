let money, time;

let appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: true

};

function start() {

   time = prompt("Введите дату в формате YYYY-MM-DD", "2019-03-05");
   while (isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет на месяц?", "60000");
   }
}

function detectDayBudget(){
 start();
 appData.moneyPerDay = (money / 30).toFixed();
 alert("Ваш дневной бюджет равен " + appData.moneyPerDay + " рублей");
}

function chooseExpenses() {
   for (let i = 0; i < 2; i++) {

      let a = prompt("Введите обязательную статью расходов на месяц", "Введите уникальное название");
      let b = (prompt("Во сколько обойдется?", "Число"));

      if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != '' &&
         b != "" && a.length < 50) {
         console.log('done');
         appData.expenses[a] = b;
      }
   }
}

function checkSavings(){
   if (appData.savings == true){
      let save = +prompt("Сумма накоплений"),
          percent = +prompt("Под какой процент?");
      appData.monthIncome = save/100/12*percent;
      alert("Доход с Вашего депозита = " + appData.monthIncome.toFixed());
   }
}

function detectLevel() {
   if (appData.moneyPerDay < 1500) {
      console.log("Минимальный уровень достатка");
   } else if (appData.moneyPerDay > 1500 && appData.moneyPerDay < 3000) {
      console.log("Средний уровень достатка");
   } else if (appData.moneyPerDay >= 3000) {
      console.log("Высокий уровень достатка");
   } else (console.log("Произошла ошибка"));
}

function chooseOptExpenses(){
   for (let i = 0; i < 3; i++) {

      let a = prompt("Введите Необязательную статью расходов на месяц", "Введите уникальное название");

      if ((typeof (a)) === "string" && (typeof (a)) != null &&  a != '' && a.length < 50) {
         console.log('OptExpenses done');
         appData.optionalExpenses[i+1] = a;
      }
   }
}

//detectDayBudget();
//chooseExpenses();
//checkSavings();
//detectLevel();
chooseOptExpenses();
console.log(JSON.stringify(appData));




