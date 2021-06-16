function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var result = convertHoursToMinutes(3);
console.log('3 hours to min: ', result);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
console.log(getGreeting('Universe'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
result = addAndMultiplyBy5(10, 5);
console.log('(10+5)*5 = ', result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
result = multiplyAndDivideBy5(35, 10);
console.log('(35*10)/5 = ', result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
result = subtractTwoNumbers(22, 7);
console.log('22 - 7 = ', result);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
result = getCircleCircumference(5);
console.log('Circumference: ', result);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var name = getFullName('Donald', 'Duck');
console.log('Full name: ', name);

function cube(number) {
  return number * number * number;
}
result = cube(5);
console.log('Cube of 5: ', result);
