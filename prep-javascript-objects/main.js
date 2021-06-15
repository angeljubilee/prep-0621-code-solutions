var person = {
  firstName: 'Mickey',
  lastName: 'Mouse',
  hobby: 'Magic'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName + '.');

person.job = 'Magician';
console.log("The person's current job is: " + person.job + '.');

person.previousJob = 'Steam engine operator';
console.log("The person's previous job is: " + person.previousJob + '.');

console.log(person);
