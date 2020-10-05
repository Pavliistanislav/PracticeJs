// Sort Object && array

const sortByFeedbacks = (arr) => {
  const temp = JSON.parse(JSON.stringify(arr));

  temp.forEach((item) => {
    item.ratingRevievs = +item.ratingRevievs.replace(/\D/g, ""); // не число
  });

  temp.sort((a, b) => (a.ratingRevievs > b.ratingRevievs ? 1 : -1));

  document.querySelector("#root").innerHTML = "";
  temp.forEach((item) => {
    if (typeof item.price === "string") {
      item.price = +item.price.replace(/\D/g, "");
    } else {
      item.price = item.price.newUan.replace(/\D/g, "");
    }
    document.querySelector("#root").innerHTML += `
    <h3>${item.name}</h3>
    <div>Цена: ${item.price} грн.</div>
    <div>Отзывов: ${item.ratingRevievs}</div>
    `;
  });
};

const sortAboutPrice = () => {
  const temp = JSON.parse(JSON.stringify(arr));

  temp.forEach((item) => {
    if (typeof item.price === "string") {
      item.price = +item.price.replace(/\D/g, "");
    } else {
      item.price = item.price.newUan.replace(/\D/g, "");
    }
  });

  temp.sort((a, b) => (a.price > b.price ? 1 : -1));

  document.querySelector("#root").innerHTML = "";

  temp.forEach((item) => {
    document.querySelector("#root").innerHTML += `
    <h3>${item.name}</h3>
    <div>Цена: ${item.price} грн.</div>
    <div>Отзывов: ${item.ratingRevievs}</div>
    `;
  });
};

// document.querySelector(".feed").addEventListener("click", () => {
//   sortByFeedbacks(arr);
// });

// document.querySelector(".price").addEventListener("click", () => {
//   sortAboutPrice(arr);
// });


// Remove dublicate array

const arr = ['Alex', 'Jane', 'Mark', 'Jane', 'Melisa', 'Jane']
let uniqArray = []
uniqArray = new Set(arr)
// unigArray = Array.from(new Set(arr))

unigArray = arr.filter((item, index) => index === arr.indexOf(item))
let debug = [];
unigArray = arr.filter((item, index) => {
  debug.push({
    item,
    index,
    indexOf: arr.indexOf(item)
  })
  return index === arr.indexOf(item)
})

uniqArray = arr.reduce((uniq, item) => {
  return uniq.includes(item) ? uniq : [...uniq, item]
}, [])
// console.log(uniqArray);
// console.table(debug)
// console.log(arr);


//First letter upper

const capitalizeFirstLEtter = (str) => {
  return str[0].toUpperCase() + str.substring(1)
  return str.charAt(0).toUpperCase() + str.substring(1)
}

// console.log(capitalizeFirstLEtter('front-end'));


//Palindrom

const palindrome = (str) => {
  str = str.toLowerCase().replace(/\s/g, ''); // замена пробелов на пустую строку
  return str === str.split('').reverse().join('');
}

const palindromeFunc = (str) => {
  const lenth = Math.floor(str.length / 2);
  console.log(lenth);
  for (let i = 0; i < lenth; i++) {
    if (str[i] !== str[str.length - 1 - 1]) {
      return false;
    }
    return true;

  }

}

// Сначала обе строки разбиваем на массивы, сортируем их, а затем отсортированные последовательности снова собираем в строки.Если обе строки оказались одинаковыми(а они окажутся одинаковыми, если набор символов был один и тот же в обеих строках), то можно сделать вывод, что строки являются анаграммами.

function sortString(str) {

  //переводим все буквы в нижний регистр
  str = str.toLowerCase();

  //превращаем строку в массив
  let arr = str.split('');

  //создаём регулярное выражение, которое пропускает только символы
  let rgxp = new RegExp(/^[a-zа-яё]/);

  //удаляем из массива все элеметны, которые не являются символами (буквами)
  for (let i = 0; i < arr.length; i++) {
    if (!rgxp.test(arr[i])) {
      delete arr[i];
    }
  }

  //создаём массив, в котором будет храниться его отсортированная копия
  let res = [];

  //сортируем массив
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let v = arr[i];
        arr[i] = arr[j];
        arr[j] = v;
      }
    }
  }

  //возвращаем результат уже в виде строки 
  return arr.join('');
}

//создаём две строки, наполненные одинаковыми символами
let str1 = 'Hello wrldo!';
let str2 = 'Ole!hl drlow';

let strA = sortString(str1);
let strB = sortString(str2);

// console.log(strA);
// console.log(strB);

// console.log(strA == strB);

//FizzBuzz
const fizzBuzz = (num) => {
  for (let i = 0; i <= num; i++) {
    let output = ''
    if (i % 3 == 0) output += 'fizz'
    if (i % 5 == 0) output += 'buzz'
    // console.log(output || i);
  }
}

// fizzBuzz(50);

for (i = 0; i < 20;) console.log((++i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);

function isFizz(n) {
  if (n % 3 == 0) {
    return true
  }
  return false;
}

function isBuzz(n) {
  if (n % 5 == 0) {
    return true;
  }
  return false
}

function isFizzBuzz(n) {
  if ((n % 3 == 0) && (n % 5 == 0)) {
    return true
  }
  return false
}
for (let i = 0; i < 20; i++) {
  switch (true) {
    case isFizzBuzz(i):
      console.log('fizzBuzz');
      break;
    case isFizz(i):
      console.log('fizz');
      break;
    case isBuzz(i):
      console.log('buzz');
      break;
    default:
      console.log(i);
  }
}

const MAX_NUM = 20;

class Tag {
  constructor(_value) {
    this.value = _value
  }
}

class Printer {
  constructor(_context) {
    this.context = _context;
  }

  print() {
    console.log(this.context.value);
  }
}

class DivCondition {
  constructor(_divider) {
    this.divider = _divider;
  }

  isTruthy(num) {
    return num % this.divider == 0
  }
}

class AndStrategy {
  constructor(_conditionsOrStrategies) {
    this.conditions = _conditionsOrStrategies;
  }
  isTruthy(num) {
    for (let i in this.conditions) {
      if (!this.conditions[i].isTruthy(num)) {
        return false
      }
    }
  }
}

class TagNumRule {
  constructor(_tag, _strategy) {
    this.strategy = _strategy;
    this.tag = _tag;
  }

  isSuccess(num) {
    return this.strategy.isTruthy(num)
  }
}

class TagNumRulesCollection {
  constructor(_tags) {
    this.tags = _tags;
  }

  find(num, defaultValue) {
    for (let i in this.tags) {
      if (this.tags[i].isSuccess(num)) {
        return this.tags[i].tag
      }
    }
    return defaultValue;
  }
}
const numTags = new TagNumRulesCollection([
  new TagNumRule(new Tag('FizzBuzz'), new AndStrategy([new DivCondition(3), new DivCondition(5)])),
  new TagNumRule(new Tag('Fizz'), new AndStrategy([new DivCondition(3)])),
  new TagNumRule(new Tag('Buzz'), new AndStrategy([new DivCondition(5)]))

]);

for (let i = 0; i < MAX_NUM; i++) {
  new Printer(numTags.find(i, new Tag(i))).print()
}

//String in substring

let string = 'crossroad';
let substring = 'roads';

let resultIncludes = string.includes(substring);
let resultIndexOf = string.indexOf(substring) !== -1;
let regExp = /road/; // чувствительный к регистру
let resultRegExp = regExp.test(string)
// console.log();

//ClassNames

let classNames = ['header', 'menu', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link']

let classNameCount = {};
let arrayUniq = []

for (let i = 0; i < classNames.length; i++) {
  let current = classNames[i]
  if (classNameCount[current]) {
    classNameCount[current] += 1
  } else {
    classNameCount[current] = 1
    arrayUniq.push(current)
  }
  // В массив
}
let result = Object.keys(classNameCount).sort((a, b) => classNameCount[b] - classNameCount[a]);
// console.log(result);

let size = 15;
for(let i = '#'; i.length < size; i+='#') {
  // console.log(i);
}

let sizeChessBoard = 8;
let output = '';
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      output += ' ';
    } else {
      output += '#'
    }
  }
  output += '\n'
}

// console.log(sizeChessBoard);