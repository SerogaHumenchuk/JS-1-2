"use strict";

// let arr2 = ['Anton', 'Dima', 'Bohdan','Georg', 'Danil', 'Oleh'];
// let arrResult = arr2.slice(2);
// console.log(arrResult);

// 111111111111111111111111111111111111111
/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.
  
  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях 
  элементы массива.
*/

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// console.log(users.length); // 4

// console.log(users[1]); // Poly
// console.log(users[3]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[2]); // Ajax



// 22222222222222222222222222222222222222222222

/* Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// /* Используя методы массива, последовательно выполнить следующие операции */

// // Удалить из начала массива нулевой элемент
// users.shift(); // Mango
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // // Удалить из конца массив последний элемент
// users.pop();
// console.log(users); // ["Poly", "Ajax"]

// // // Добавить в начало массива любое имя
// users.unshift('Anton'); 
// console.log(users); // ["добавленое имя", "Poly", "Ajax"]

// // Добавить в конец массива два любых имени за одну операцию
// users.push('Roman', "Oleh");
// console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]





// let counter = 0;

// while(counter < 10 ) {
//   console.log(counter);
//   counter += 1;
// }

// do {
//   console.log(counter);
//   counter +=1;
// } while(counter < 10 );


// for(let counter = 0; counter < 10; counter++) {
//   console.log(counter);
// }

// const clients = ['Mango', 'Ajax', 'Poly'];

// for(let i = 0; i < clients.length ; i += 1) {
//   console.log(clients[i]);
// }


// const numbers = [1, 3, 4, 10, 22, 12, 3, 13]; 
// const newNum = [];

// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] > 10) {
//     newNum.push(numbers[i])
//   }
// }
// for(const i of numbers) {
//   if(i > 10) {
//     newNum.push(i);
//   }
// }

// console.log(newNum);



// const numbers = [1, 3 ,4, 10, 22, 12, 3, 12];
// const userInput =  +prompt('Enter number:');
// let hasNum = false;

// for(const num of numbers) {
//   if(userInput === num) {
//     hasNum = true;
//     break;
//   } 
// }
// console.log(hasNum);

// const massage = hasNum ? 'Таке число є' : 'Такого числа немає';
// console.log(massage);




// const numbers = [1, 3 ,4, 10, 22, 12, 3, 12];
// const newArr = [];
// const newArr2= [];

// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] % 2 === 0) {
//     newArr.push(numbers[i]);
//   } else {
//     newArr2.push(numbers[i]);
//   }
// }

// for(const i of numbers) {
//   if(i % 2 === 0) {
//     newArr.push(i);
//   } else {
//     newArr2.push(i);
//   }
// }


/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

// let string  = 'asdcds dfdsfds sdfdsf sdfds';
// let arr;

// Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr

// arr = string.split('');
// console.log(arr);

// Вывести в консоли общую длину массива arr
// console.log(arr.length);

// Используя цикл, вывести в консоль все индексы массива arr

// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
// }


// Используя цикл, вывести в консоль все элементы массива arr


// let newArr = [];
// for(const i of arr) {
//   newArr.unshift(i)
// }
// console.log(newArr);

// Используя цикл, bывести в консоли все пары индекс:значение массива arr
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
// }


/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
   Если посетитель ввёл другое число или нажал Cancel – попросить ввести ещё раз, 
   и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/
// let task = 110;
//  while(task > 100 && task !== null) {
//    task = prompt('>100')
//  }


/*
  Напишите скрипт, который выводит через console.log все 
  числа от min до max, с двумя исключениями: 
    
    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'
    
    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'
    
  PS: используйте цикл for
*/

// const min = 1;
// const max = 100;

// for(let i = min; i <= max; i++) {
//   if(i % 3 === 0) {
//     console.log('Fizz');
//   } else if(i % 5 === 0 && i % 3 !== 0)  {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }


/*
  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];


// for(let i of numbers) {
//   if(i > 10) {
//     newArray.push(i);
//   }
// }
// console.log(newArray);

// for(let i=0; i < numbers.length; i++) {
//   if(numbers[i] > 10) {
//     newArray.push(numbers[i]);
//   }
// }
// console.log(newArray);


// // group - 2

// /*
//   Напишите скрипт, который проверяет произвольную строку 
//   в переменной string и находит в ней самое длинное слово,
//   записывая его в переменную longestWord.
// */

// const string = "May the  force be with you";
// let longestWord = '';
// const arr = string.split(' ');

// for(const el of arr) {
//   if(el.length > longestWord.length) {
//     longestWord = el; 
//   }
// }
// console.log(longestWord); // 'force'


// /*
//   Напишите скрипт который:
  
//   - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
//     Используйте do...while.
//   - Проверять что пользователь ввел не число не обязательно
//   - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
//   - После того как ввод был завершен, если массив не пустой, 
//     скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
//     Используйте цикл for...of
// */

// let a;
// let sum = 0;
// do {
//   a = +Number(prompt('Enter some number'));
//   sum = sum + a;
// } while(a !== 0)

// console.log(sum);





//  ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ***
  
//   Создайте игру угадай число.
  
//   Есть массив чисел numbers, содержащий "верные" числа.
//   Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
//   Просим пользователя ввести цифру от самого маленького,
//   до самого большого элемента массива. Эти значения необходимо
//   сохранить в переменные min и max. Учтите что массив произвольный,
//   но элементы всегда идут по возрастанию.
  
//   Пусть prompt говорит "Введите цифру между x и y", где x и y 
//   соотвественно самый маленький и самый большой элемент массива.
  
//   Но пользователь может ввести что угодно, необходимо проверить 
//   что было введено. Преобразовать input в числовой тип и проверить 
//   число ли это.
  
//     - Если не число - выводим alert с сообщением о том, что было 
//       введено не число.
//     - Если число - проверить содержит ли в себе массив numbers это число.
//     - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
//     - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
// */

// const numbers = [12, 15, 25, 37, 41];
// let min = numbers[0];
// let max = numbers[numbers.length-1];

// let userInput = +prompt(`Введите цифру между ${min} и ${max}`);
// let hasNumber = false;
// console.log(userInput);
// if(isNaN(userInput)) {
//     alert('было введено не число')
// } else {
//     for(const el of numbers) {
//         if(userInput === el) {
//             hasNumber = true;
//             break;
//         } 
//     }
// }
// hasNumber ? alert('Поздравляем, Вы угадали!') : alert('Сожалеем, Вы не угадали!');




/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/
// let arr = [];
// let num;
// do {
//     num = prompt('Enter some number:');
//     arr.push(num);
//     console.log(arr);
// } while (num !== null) 


// let arr = [10, 7.3, 4, 13, 0.24];
// let sum = 0;

// for(let el of arr) {
//     if(el % 2 === 0) {
//         sum = sum + el;
//     } else if (el % 2 === 1){
//         sum = sum - el;
//     } else {
//         sum = sum;
//     }
// }
// console.log(sum);





// let a = [1,1];
// let chyslo;
// let b = +prompt('Enter a number pls');
// for(let i = 0; i < (b-2) ; i += 1){
//   chyslo = a[a.length-1] + a[a.length-2]
//   a.push(chyslo);
// }
// if(b === 1){
//     a.pop();
//     alert(a);
// }
// else if(b === 0){
//     a.pop();
//     a.pop();
// }
// else if(b<1 && b!==0){

// }
// else{
//     alert(a);
// }



// let prmpt = +prompt('Ввведіть число');
// let fib = (max) => {
//   let fibNum = 1;
//   let first = 0;
//   let second = 1;
//   let arr = [];
//   do {
//     arr.push(fibNum);
//     fibNum = first + second;
//     first = second;
//     second = fibNum;
//   } while (fibNum <= max);

//   console.log(arr);
//   return;
// }


// fib(prmpt);



/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
   Если посетитель ввёл другое число или нажал Cancel – попросить ввести ещё раз, 
   и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/

// let userInput;

// do {
//   userInput = +prompt('Enter some number')
// } while (userInput < 100)


