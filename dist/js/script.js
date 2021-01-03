" use strict";
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

// let money,time;

// function start () {
// 	money = +prompt ("Ваш бюджет на месяц?", "");
// 	time = +prompt ("Введите дату в формате YYYY-MM-DD", "");

// 	while ( isNaN (money) || money == " " || money == null ) {
// 		money = +prompt ("Ваш бюджет на месяц?", "");
// 	}
// }

// start();

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: true
// };

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


// function detectedDayBudget() {
// 	appData.moneyPerDay = (appData.budget / 30).toFixed(); //toFixed()округляет значение , 
// // меняет значение на строку 
// 	alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");	
// }

// detectedDayBudget();

// function detectedLevel(){
// 	if (appData.moneyPerDay < 100) {
// 		alert("Это минимальный уровень достатка!");
// 	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
// 		alert("Это средний уровень достатка!");
// 	} else if (appData.moneyPerDay > 2000) {
// 		alert("Это высокий уровень достатка!");
// 	} else {
// 		alert("Произошла ошибка");
// 	}
// }

// detectedLevel();

// function checkSavings (){
// 	if ( appData.savings == true) {
// 		let save = +prompt("Какова сумма накоплений ?"),
// 			percent = +prompt("Под какой процент ? ");
		
// 		appData.monthIncome = save/100/12*percent;
// 		alert("Ваш доход в месяц составил : " + appData.monthIncome + " руб.," );
// 	}
	
// }
// checkSavings();


// function chooseOptExpenses() {
// 	for (let i = 1; i <= 3; i++) {
//         let questionOptExpenses = +prompt("Статья необязательных расходов?");
//         appData.optionalExpenses[i] = questionOptExpenses;
//         console.log(appData.optionalExpenses);
//     }
// }

// chooseOptExpenses();


// function first() {
// 	setTimeout(function(){
// 		console.log(1);
// 	}, 500 );
// }

// function second(){
// 	console.log(2);
// }

// first();
// second();


// function learnJS (lang,callback ){
// 	console.log("Я учу " + lang);
// 	callback();
// }

// learnJS("JavaScript", function(){
// 	console.log("Я прошел 3-ий урок!");
// });


// //объекты 

// let options  = {
// 	width : 1024 ,
// 	height : 1024 , 
// 	name : "test"
// };

// console.log(options.name);


// options.bool = true ; // передать значение в объект 
// console.log(options.bool);
// options.colors = {    // запись объекта в объект 
// 	border : "black",
// 	bg: "red" 
// };

// delete options.bool ;  // удалить свойства из объекта 

// console.log(options);

// //ключ объекта
// for (let key in options){
// 	console.log("Свойство " + key + " имеет значение " + options[key]);
// } //перебор элементов объекта 

// console.log(Object.keys(options).length); //количество свойств в объекте 

// let arr = ["first", 2, 3, 4, "five"];
//arr.pop(); //удалить значение с конца 

// arr.push(6); //добавляет значение в конце массива 
// arr.push(9);
// console.log(arr); //удалить значение с конца 

// arr.shift();//удаляет первый элемент из МАССИВА

// console.log(arr); 
// arr.unshift(2); // добавляет элемент в начале МАССИВА

// console.log(arr); 


// перебор элементов массива 

// for(let i = 0; i < arr.length ; i++) {
// 	console.log(arr[i]);
// }
//arr[99] = 98; //назначение 99 элемента значением 99 . 


// arr.forEach( function (item, i, arrow ){
// 	console.log(i + ": " + item + "(массив : " + arr + ")");
// }) ;
 

// i - номер элемента 
// item - значение элемента 
//arrow - название массива 

// самый новый способ перебора массива 



// let mass = [1, 3, 4, 6, 7];

// mass.forEach( function (item , i , mass){
// 	console.log(i + ": " + item + "(массив : " + mass + ")");
// });

// for (let key in mass){
// 	console.log(key +" "+ " значение " + mass[key]);
// }
// let answer = prompt("",""),
// 	arr = [];

// 	arr = answer.split(',');
// 	console.log(arr); //изменение типа данных на строку из ответа пользователя

// let arr = ["aawe", 'awww', 'lwww'],
// 	i = arr.join(', '); // превращает массив в одну строку , в скобках показан разделитель в строке 
// 	console.log(i);// выводится строка , через запятую 

// let arr = [1, 15, 12, 8],
// 	i = arr.sort(compareNum); // сортирует числа по возрастанию 
// function compareNum (a,b){
// 	return a-b;
// }
// 	console.log(arr);// 

// ОСНОВЫ ОБЪЕКТНО ОРИЕНТИРОВАННОГО ПРОГРАММИРОВАНИЯ 


// var soldier = { // прототипирование объектов 
// 	health : 400 , 
// 	armor : 100 
// };

// var john = {
// 	health : 100
// };

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);


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
	savings: true,
	chooseExpenses: function(){
		for (let i = 0; i < 2; i++) {
			let a = +prompt ("Введите обязательную статью расходов в этом месяце", ""),
				b = +prompt ("Во сколько обойдется?", "");
		
			if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
				appData.expenses[a] = b;
			} else {                            
				console.log ("bad result");
				i--;
			}
	
	}
	},
	detectDayBudget : function(){
			appData.moneyPerDay = (appData.budget / 30).toFixed(); //toFixed()округляет значение 
			alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
	},
	detectedLevel : function(){
	if (appData.moneyPerDay < 100) {
		alert("Это минимальный уровень достатка!");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		alert("Это средний уровень достатка!");
	} else if (appData.moneyPerDay > 2000) {
		alert("Это высокий уровень достатка!");
	} else {
		alert("Произошла ошибка");
	}
	},
	checkSavings : function (){
		if ( appData.savings == true) {
			let save = +prompt("Какова сумма накоплений ?"),
				percent = +prompt("Под какой процент ? ");
			
			appData.monthIncome = save/100/12*percent;
			alert("Ваш доход в месяц составил : " + appData.monthIncome + " руб.," );
		}
	},
	chooseOptExpenses : function () {
		for (let i = 1; i <= 3; i++) {
			let questionOptExpenses = +prompt("Статья необязательных расходов?");
			appData.optionalExpenses[i] = questionOptExpenses;
			console.log(appData.optionalExpenses);
		}
	},
    chooseIncome : function(){
		let items = prompt("Что принесет дополнительный доход ?" + "(перечислите через запятую )", '');
		appData.income = items.split(', ');
		appData.income.push(prompt('Что еще может принести дополнительный доход ? ',''));
		appData.income.sort();
		
		appData.income.forEach( function (item, i, income ){
		alert("Способы дополнительного заработка :" + i+1 + '.'+ item , '');
		}) ;
	}
	
};

appData.chooseIncome();
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}



