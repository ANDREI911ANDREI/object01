'use strict';

// var openModal = 0;
// var modal = document.getElementsByClassName('.modal_windows');

// function openModals(ind) {
// 	//openModal = ind;
// 	if (openModal == 0) {
// 		modal.style.display = 'none';
// 	}else {
// 		modal.style.display = 'block';
// 	}
// }
// console.log(openModal);

// let money = +prompt ("Ваш бюджет на месяц?", ""),
//     time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    
// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: false
// };


// for (let i = 0; i < 2; i++) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {                            
//         console.log ("bad result");
//         i--;
//     }

// };



// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);


// appData.moneyPerDay = appData.budget / 30;


// alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");


// if (appData.moneyPerDay < 100) {
//     console.log ("Это минимальный уровень достатка!");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log ("Это средний уровень достатка!");
// } else if (appData.moneyPerDay > 2000) {
//     console.log ("Это высокий уровень достатка!");
// } else {
//     console.log ("Произошла ошибка");
// }


// function showFirstMessage ( text ) {
// 	alert(text);

// };

// showFirstMessage('Hello world !');

// function calc (a,b) {
// return a + b ;
// }

// console.log(calc(3,4));

// function retVar ( ) {
// 	let num = 50 ;
// 	return num ; 
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let calc = (a,b) => (a+b); //формат написания функции 
// // как в ES6

// console.log(calc(4,8));

// console.log(calc(6,9));

// //методы и свойства у строк и чисел 

// let str = 'тест';
// console.log(str.length); //вывод длины строки 

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelwe = "12.2px";
// //console.log(Math.round(twelwe)); // округление числа 
// console.log(parseInt(twelwe)); //возврат целого чилса 
// console.log(parseFloat(twelwe));//возврат десятичного числа 

let money,time;

function start () {
	money = +prompt ("Ваш бюджет на месяц?", "");
	time = +prompt ("Введите дату в формате YYYY-MM-DD", "");

	while ( isNaN (money) || money == " " || money == null ) {
		money = +prompt ("Ваш бюджет на месяц?", "");
	}
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

// function choseeExpenses() {
// 	for (let i = 0; i < 2; i++) {
// 		    let a = +prompt ("Введите обязательную статью расходов в этом месяце", ""),
// 		        b = +prompt ("Во сколько обойдется?", "");
		
// 		    if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
// 		        appData.expenses[a] = b;
// 		    } else {                            
// 		        console.log ("bad result");
// 		        i--;
// 		    }
		
// 		}
// }

// choseeExpenses();


function detectedDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed(); //toFixed()округляет значение , 
// меняет значение на строку 
	alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");	
}

detectedDayBudget();

function detectedLevel(){
	if (appData.moneyPerDay < 100) {
		alert("Это минимальный уровень достатка!");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		alert("Это средний уровень достатка!");
	} else if (appData.moneyPerDay > 2000) {
		alert("Это высокий уровень достатка!");
	} else {
		alert("Произошла ошибка");
	}
}

detectedLevel();

function checkSavings (){
	if ( appData.savings == true) {
		let save = +prompt("Какова сумма накоплений ?"),
			percent = +prompt("Под какой процент ? ");
		
		appData.monthIncome = save/100/12*percent;
		alert("Ваш доход в месяц составил : " + appData.monthIncome + " руб.," );
	}
	
}
checkSavings();


function chooseOptExpenses() {
	for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = +prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}

chooseOptExpenses();

