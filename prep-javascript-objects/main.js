var person = {
  firstName: 'Maria',
  lastName: 'Von Trap',
  hobby: 'Singing'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);
person.job = 'Governess';
console.log("The person's job is:", 'Governess');
person.previousJob = 'Nun';
console.log("The person's previous job was:", 'Nun');
console.log('complete person object:');
var completePerson = {
  firstName: 'Maria',
  lastName: 'Von Trap',
  hobby: 'Singing',
  job: 'Governess',
  previousJob: 'Nun'
};
console.log(completePerson);
