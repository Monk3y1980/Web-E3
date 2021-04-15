
/* 
  Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
  Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
  При выполнении задания необходимо учесть, что массив может содержать не только числа, 
  но и, например, знаки, null и так далее.
*/

let ar = [5, 0, 10, 15, 20, 25, 30, 35, 40, 45, 50, 63, '', 'adsfsmdjfngvfdjgb'];
if (ar.includes(0)) {
  document.write('В массиве есть нули' + '<br>');
} else {
  document.write('nicht Null');
}
let arr = ar.filter(number => Number(number));

function liste(arr) {
  let sumOdd = 0;
  let sumEven = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEven++;
    } else {
      sumOdd++;
    }
  }
  document.write("Нечетные : " + sumOdd + "<br>");
  document.write("Четные : " + sumEven);
}
liste(arr);
