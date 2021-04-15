/*

Написать функцию, которая принимает число как аргумент и возвращает функцию, 
которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат.

*/
function addNums(num1) {
  return function (num2) {
    return num1 + num2;
  };
}
// Вызов
const num_1 = addNums(5);
const num_2 = addNums(8);

document.write('<p>', num_1(10), '<p>');
document.write('<p>', num_2(5), '<p>');