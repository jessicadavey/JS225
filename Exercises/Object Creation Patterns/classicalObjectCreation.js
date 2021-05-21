function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.eat = function() {
  console.log('Eating');
}

Person.prototype.communicate = function() {
  console.log('Communicating');
}

Person.prototype.sleep = function() {
  console.log('Sleeping');
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
}

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);

  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);

Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
}

Object.defineProperty(Doctor.prototype, 'constructor', {
  value: Doctor,
  enumerable: false,
  writable: true,
});

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);

Professor.prototype.teach = function() {
  console.log('Teaching');
}

Object.defineProperty(Professor.prototype, 'constructor', {
  value: Professor,
  enumerable: false,
  writable: true,
})

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.study = function() {
  console.log('Studying');
}

Object.defineProperty(Student.prototype, 'constructor', {
  value: Student,
  enumerable: false,
  writable: true,
})

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);

GraduateStudent.prototype.research = function() {
  console.log('Resesarching');
}

Object.defineProperty(GraduateStudent.prototype, 'constructor', {
  value: GraduateStudent,
  enumerable: false,
  writable: true,
})

const person = new Person('foo', 'bar', 21, 'gender');
// console.log(person instanceof Person);     // logs true
// person.eat();                              // logs 'Eating'
// person.communicate();                      // logs 'Communicating'
// person.sleep();                            // logs 'Sleeping'
// console.log(person.fullName());            // logs 'foo bar'

const doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'

const student = new Student('foo', 'bar', 21, 'gender', 'Biology');

const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
// console.log(graduateStudent instanceof Person);
// console.log(graduateStudent instanceof Student);
// console.log(graduateStudent instanceof GraduateStudent);
// graduateStudent.eat();                     // logs 'Eating'
// graduateStudent.communicate();             // logs 'Communicating'
// graduateStudent.sleep();                   // logs 'Sleeping'
// console.log(graduateStudent.fullName());   // logs 'foo bar'
// graduateStudent.study();                   // logs 'Studying'
// graduateStudent.research();                // logs 'Researching'

