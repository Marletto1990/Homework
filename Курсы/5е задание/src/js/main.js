let buttonStart = document.getElementById("start");
console.log(buttonStart);

let valueDivs = document.body.querySelectorAll(".result-table div");
console.log(valueDivs);
let truvalueDivs =[];

valueDivs.forEach(function(item, i, arr){
    if(i%2!=0){truvalueDivs.push(item);
    }
});

console.log(truvalueDivs);

let expensesItem = document.body.querySelectorAll('.expenses-item');
console.log(expensesItem);

let optionalExpensesItem = document.body.querySelectorAll(".optionalexpenses-item");
console.log(optionalExpensesItem);

let allButtons = document.getElementsByTagName('button');
console.log(allButtons);
let approveExpenses = allButtons[0];
let approveOptionalExpenses = allButtons[1];
let countBudget = allButtons[2];

let eventualExpenses = document.querySelectorAll(".choose-income");
console.log(eventualExpenses);

let savings = document.getElementById('savings');
console.log(savings);