function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * (60);
}
var convert = convertHoursToMinutes(2);
console.log('Convert:', convert);

function getGreeting(name) {
  var result = 'Hello' + ' ' + name + '!';
  return result;
}
var name = getGreeting('World');
console.log('Greeting:', name);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var result = addAndMultiplyBy5(10, 5);
console.log('Result', result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var answer = multiplyAndDivideBy5(35, 10);
console.log('Answer', answer);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtract = subtractTwoNumbers(22, 7);
console.log('Subtracted', subtract);

function getCircleCircumference(radius) {
  return 2 * Math.PI * (radius);
}
var radius = getCircleCircumference(5);
console.log('Radius', radius);

function getFullName(firstName, lastName) {
  var result = firstName + ' ' + lastName;
  return result;
}
var fullName = getFullName('Juan', 'Ramirez');
console.log('fullName', fullName);

function cube(number) {
  return number * number * number;
}
var solve = cube(5);
console.log('solve', solve);
