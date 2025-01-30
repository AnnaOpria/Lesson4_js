//1.

//let inputQues = 'number'+3+5;
//console.log(inputQues, typeof inputQues); // Результат: number35 string
// 'number' - string + 3 - Number + 5-Number - завдяки конкатенації з'єднує, перетворив все на String

//2. 

//let inputQues = null + 3;
//console.log(inputQues, typeof inputQues); // Результат: 3 number
// null = 0 , 0+3=3, 3-number

//3.

//let inputQues = 5 && "qwerty";
//console.log(inputQues, typeof inputQues); //Результат: qwerty string
// Оператор && (І) так як 5 та "qwerty" - true, то виводиться останнє значення true.

//4.

//let inputQues = +'40' + +'2' + "hillel"; 
//console.log(inputQues, typeof inputQues); //Результат: 42hillel string
// Завдяки конкатенації прходить з'єднання. Незважаючи на те, що 40 та 2 - string, 
// вони все одно складаються та потім додається hillel

//5.
//let inputQues='10' - 5 === 6;
//console.log(inputQues, typeof inputQues); // Результат: false boolean
// === знак строгово рівняння, "10"-зі строки перетворюється в число, відбувається вичитання
// 10-5 =5 → number, т.я 5 не дорівнює 6. Хоча і 5, і 6 -одного типу.
 
//6.
//let inputQues=true + false;
//console.log(inputQues, typeof inputQues); // Результат: 1 number
// true = 1,  false = 0, маємо 1+0=1.

//7.
//let inputQues='4px'-3;
//console.log(inputQues, typeof inputQues); // Результат: NaN number
// NaN - т.я. '4px' - string віднімається від 3 number, у данному випадку
// строка не стає числом. Помилка причитанні px.

//8.
//let inputQues='4' - 3;
//console.log(inputQues, typeof inputQues); // Результат: 1 number
// у цьому випадку string "4" - стає Number, далі проходить математична дія 4-3=1

//9.
//let inputQues='6' + 3 ** 0;
//console.log(inputQues, typeof inputQues); //Результат: 61 string
// ** - возведення у ступінь. 3 у ступені 0= 1
// '6' String складається з 1, завдяки конкатенації, перетворюя 1 в String

//10.
//let inputQue = 12 / '6';
//console.log(inputQues, typeof inputQues); //Результат: 2 number
// здійсрюється математична дія ділення числа 12 на строку "6", яка преобразується
//в число.

//11.
//let inputQues = '10'+ (5 === 6);
//console.log(inputQues, typeof inputQues); //Результат: 10false string
// 5===6 - це boolean та строге рівняння, т.я. в лапках вирішується спочатку
//повертає "false" , '10' String -робить конкатенації перетворюя "false" у строку.

//12.
//let inputQues = null == '';
//console.log(inputQues, typeof inputQues); // Результат: false boolean
// == не є строгим рівнянням,  null -може бути рівен тільки undefined, не може бути рівен ні ялим більше значенням.

//13.
//let inputQues = 3 ** (9 / 3);
//console.log(inputQues, typeof inputQues);// Результат: 27 number
// перше робиться дія у лапках, отримуєм 3, ** - возводить 3 у 3 ступінь, отримуєм 27

//14.
//let inputQues = !!'false' == !!'true';
//console.log(inputQues, typeof inputQues); //Результат: true boolean
// !! - приводить значення до логічного типу, у данному випадку строка має логічне значення - true
// як зліва, так і з права

//15. 
//let inputQues = 0 || '0' && 1;
//console.log(inputQues, typeof inputQues); //Результат: 1 number
//  && знаходиться в пріоритеті перед ||, тому починаємо з "0" - строка -true,
// 1 - число- true, тому виводиться останнє true значення, в виразі 0||1,
//0 - false, а 1 це true, і логічне || може не повертати булеві значення якщо є числа
// false (0)||true(1)→ 1 number

//16.
//let inputQues = (+null == false) < 1;
//console.log(inputQues, typeof inputQues); // Результат: false boolean
//+ null - преобразується в число 0, саме у цьому випадку буде +0, "==" - приводить до одного типу даних, тому
// false = 0, у лапках маємо +0==0 - що є true,  т.я. true має значення 1, то маємо 1<1, а це є false

//17.
//let inputQues = false && true || true;
//console.log(inputQues, typeof inputQues); // Результат: true boolean
// && - у приорітеті, тому false && true → false, false||true → true

//18.
//let inputQues = false && (false || true);
//console.log(inputQues, typeof inputQues); // Результат: false boolean
// перша дія в лапках - false || true → true,    false && true → false

//19.
let inputQues = (+null == false) < 1 ** 5;
console.log(inputQues, typeof inputQues); // Результат: false boolean
// +null == false → +0==0 → true = 1 , далі маємо 1 < 1 ** 5, 1 возводимо у 5 ступінь → 1⁵ = 1,
// 1 < 1, а це є false