let money, time;

function start() {

   time = prompt("Введите дату в формате YYYY-MM-DD", "2019-03-05");
   while (isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет на месяц?", "60000");
   }
}

let appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: true,
   chooseExpenses: function () {
      for (let i = 0; i < 2; i++) {

         let a = prompt("Введите обязательную статью расходов на месяц", "название");
         let b = (prompt("Во сколько обойдется?", "Число"));

         if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != '' &&
            b != "" && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
         }
      }
   },
   detectDayBudget: function () {
      start();
      appData.moneyPerDay = (money / 30).toFixed();
      alert("Ваш дневной бюджет равен " + appData.moneyPerDay + " рублей");
   },
   detectLevel: function () {
      if (appData.moneyPerDay < 1500) {
         console.log("Минимальный уровень достатка");
      } else if (appData.moneyPerDay > 1500 && appData.moneyPerDay < 3000) {
         console.log("Средний уровень достатка");
      } else if (appData.moneyPerDay >= 3000) {
         console.log("Высокий уровень достатка");
      } else(console.log("Произошла ошибка"));
   },
   checkSavings: function () {
      if (appData.savings == true) {
         let save = +prompt("Сумма накоплений"),
            percent = +prompt("Под какой процент?");
         appData.monthIncome = save / 100 / 12 * percent;
         alert("Доход с Вашего депозита = " + appData.monthIncome.toFixed());
      }
   },
   chooseOptExpenses: function () {
      for (let i = 0; i < 3; i++) {

         let a = prompt("Введите Необязательную статью расходов на месяц", "название");

         if ((typeof (a)) === "string" && (typeof (a)) != null && a != '' && a.length < 50) {
            console.log('OptExpenses done');
            appData.optionalExpenses[i + 1] = a;
         }
      }
   },
   chooseIncome: function () {
      let i=0;
      do {
         let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
         if (typeof (items) == 'string' && typeof (items) != null && items != "") {
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то еще?", ""));
            appData.income.sort();
            let s = [];
            i++;
            
         } else{alert ("Вы ввесли не корректные данные");}
      }
      while(i<1);
      
      appData.income.forEach(function(item, i, arr) {
         console.log("№" + (i+1) + " доход: " + item);
      });
      let answer =[];
      for (let key in appData){
         answer.push(key);
         
      }
      console.log("Наша программа в себя включает:"+answer);
   }
};



//appData.detectDayBudget();
//appData.chooseExpenses();
//appData.checkSavings();
//appData.detectLevel();
//appData.chooseOptExpenses();
appData.chooseIncome();