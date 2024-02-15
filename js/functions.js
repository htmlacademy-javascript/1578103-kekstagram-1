//Функция №1 для проверки, является ли строка палиндромом

const checkPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  const stringReverse = string.split('').reverse().join('');
  return string === stringReverse; //?? Убирать ли скобки условия тернарного оператора?
  // или лучше писать для улучшения читаемости?
};
console.log('Результат 1-ой функции:');
console.log(checkPalindrome('Лёша на    полке клопа нашёл '));

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
