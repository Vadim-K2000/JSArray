'use strict';

// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const concat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log('//1');
console.log(concat([1, 2, 3], [4, 5, 6]));

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const revers = (arr = []) => {
  return arr.reverse();
};

console.log('//2');
console.log(revers([1, 2, 3]));

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const pushInArr = (arr1 = [], ...args) => {
  arr1.push(args);
  return arr1.flat(1);
};

console.log('//3');
console.log(pushInArr([1, 2, 3], 4, 5, 6));

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

const unshiftInArr = (arr1 = [], ...args) => {
  arr1.unshift(args);
  return arr1.flat(1);
};

console.log('//4');
console.log(unshiftInArr([1, 2, 3], 4, 5, 6));

// 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.

const shift = (arr = []) => {
  return arr.shift();
};

console.log('//5');
console.log(shift(['js', 'css', 'jq']));

// 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

const showLastElem = (arr) => {
  let elem = arr.pop();
  arr.push(elem);
  return elem;
};

console.log('//6');
console.log(showLastElem(['js', 'css', 'jq']));

// 7.  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

const slice = (arr = []) => {
  return arr.slice(0, 3);
};

console.log('//7');
console.log(slice([1, 2, 3, 4, 5]));

// 8.  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

const slice2 = (arr = []) => {
  return arr.slice(3);
};

console.log('//8');
console.log(slice2([1, 2, 3, 4, 5]));

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

const splice1 = (arr = []) => {
  arr.splice(1, 2);
  return arr;
};

console.log('//9');
console.log(splice1([1, 2, 3, 4, 5]));

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

const splice2 = (arr = []) => {
  return arr.splice(1, 3);
};

console.log('//10');
console.log(splice2([1, 2, 3, 4, 5]));

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const splice3 = (arr = []) => {
  arr.splice(3, 0, 'a', 'b', 'c');
  return arr;
};

console.log('//11');
console.log(splice3([1, 2, 3, 4, 5]));

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

const splice4 = (arr) => {
  arr.splice(1, 0, 'a', 'b');
  arr.splice(6, 0, 'c');
  arr.splice(8, 0, 'e');
  return arr;
};

console.log('//12');
console.log(splice4([1, 2, 3, 4, 5]));

// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const sort = (arr) => {
  return arr.sort();
};

console.log('//13');
console.log(sort([3, 4, 1, 2, 7]));

// 14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

const objKey = (obj = {}) => {
  return ([] = Object.keys(obj));
};

console.log('//14');
console.log(objKey({ js: 'test', jq: 'hello', css: 'world' }));
