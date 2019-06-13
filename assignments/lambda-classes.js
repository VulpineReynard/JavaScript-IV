// CODE here for your Lambda Classes
class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }
  // PERSON FUNCTIONS
  speak(){
    console.log(`Hello my name is ` + this.name + `, I am from ` + this.location);
  }
}

class Instructor extends Person {
  constructor(instructorAttrs) {
    super(instructorAttrs);
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }
  // INSTRUCTOR FUNCTIONS
  demo(subject) {
    console.log("Today we are learning about " + subject);
  }
  grade(student, subject) {
    console.log(student + " receives a perfect score on " + subject);
  }
}

class Student extends Person {
  constructor(studentAttrs){
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favLanguage;
  }
  // STUDENT FUNCTIONS
  listsSubjects(){
    this.favSubjects.forEach((element) => { console.log(element); });
  }
  PRAssignment(subject) {
    console.log(this.name + " has submitted a PR for " + subject);
  }
  sprintChallenge(subject) {
    console.log(this.name + " has begun the sprint challenge on " + subject);
  }
}