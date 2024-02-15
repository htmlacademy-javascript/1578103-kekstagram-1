//Функция №1 для проверки, является ли строка палиндромом

const checkPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  const stringReverse = string.split('').reverse().join('');
  return string === stringReverse; //?? Убирать ли скобки условия тернарного оператора?
  // или лучше писать для улучшения читаемости?
};
console.log('Результат 1-ой функции:');
console.log(checkPalindrome('топот'));
console.log(checkPalindrome('ДовОд'));
console.log(checkPalindrome('Кекс'));
console.log(checkPalindrome('Лёша   на полке клопа  нашёл    '));

// Функция №1 вариант 2 для проверки, является ли строка палиндромом

const checkPalindromeString = (string) => {
  string = `${string}`;
  string = string.toLowerCase().replaceAll(' ', '');
  let stringLength = string.length;
  stringLength--;
  let stringReverse = string[stringLength];
  for (stringLength--; stringLength >= 0; stringLength--) {
    stringReverse = stringReverse + string[stringLength];
  }
  return string === stringReverse;
};
console.log('Результат 1-ой функции вариант 2:');
console.log(checkPalindromeString('топот'));
console.log(checkPalindromeString('ДовОд'));
console.log(checkPalindromeString('Кекс'));
console.log(checkPalindromeString('Лёша   на полке клопа  нашёл    '));


// // Строка является палиндромом
// имяФункции('топот'); // true
// // Несмотря на разный регистр, тоже палиндром
// имяФункции('ДовОд'); // true
// // Это не палиндром
// имяФункции('Кекс');  // false
// Это палиндром
//имяФункции('Лёша на полке клопа нашёл '); // true

//Функция №2 возврата целого положительного числа

const getNumber = (value) => {
  value = `${value}`;
  let result = value.match(/\d/g);
  result = String(result);
  result = result.replaceAll(',', '');
  result = Number(result);
  console.log(typeof result);
  return result;
};
console.log('Результат 2-ой функции:');
console.log(getNumber('1 кефир, 0.5 батона'));

//Функция №3 формирования адресов файлов
const generatesFileAddresses = (originalString, minimumLength, prefix) => {
  let generatedString;
  originalString = `${originalString}`; // на случай неверного типа данных введенного аргумента
  prefix = `${prefix}`; // на случай неверного типа данных введенного аргумента
  minimumLength = parseInt(minimumLength, 10); // на случай неверного типа данных введенного аргумента
  const originalStringLength = originalString.length;
  const prefixLength = prefix.length;
  const missingLength = minimumLength - originalStringLength;
  if (missingLength <= 0) { // Можно ли записать данные къусловия через тернарный оператор?
    generatedString = originalString;
    return generatedString;
  }
  if (missingLength > prefixLength) {
    const replayPrefix = Math.floor(missingLength / prefixLength);
    const remainsPrefix = missingLength % prefixLength;
    prefix = prefix.slice(0, remainsPrefix) + prefix.repeat(replayPrefix);
    generatedString = prefix + originalString;
    return generatedString;
  }
  prefix = prefix.slice(0, missingLength);
  generatedString = prefix + originalString;
  return generatedString;
};
console.log('Результат 3-ей функции:');
console.log(generatesFileAddresses('qwerty', 4, '0'));

//Функция №4 для проверки длины строки
const checkLengthString = (string, maxLength) => {
  string = `${string}`; // на случай неверного типа данных введенного аргумента
  maxLength = parseInt(maxLength, 10); // на случай неверного типа данных введенного аргумента
  const stringLength = string.length;
  return stringLength <= maxLength;
};
console.log('Результат 4-ой функции:');
console.log(checkLengthString('проверяемая строка', 10));

//Функция №5, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

const getRandom = (min, max, decimalPlaces) => {
  if (typeof min !== 'number' || typeof max !== 'number' || typeof decimalPlaces !== 'number') {// на случай неверного типа данных введенного аргумента
    return NaN;
  }
  // return (typeof min !== "number" || typeof max !== "number" || typeof decimalPlaces !== "number") ? NaN :// на случай неверного типа данных
  if (min < max) {
    const randomNumber = (Math.random() * (max - min) + min).toFixed(decimalPlaces);
    return randomNumber;
  }
  const randomNumber = (Math.random() * (min - max) + max).toFixed(decimalPlaces);
  return randomNumber;
};

console.log('Результат 4-ой функции:');
console.log(getRandom(1.2, 1.1, 5));
