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

class ProjectManagers extends Instructor {
  constructor(pmAttrs){
    super(pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }
  // PROJECTMANAGERS FUNCTIONS
  standup(slackChannel) {
    console.log(this.name + " announces to " + slackChannel + ", @channel standy times!");
  }
  debugsCode(studentObj, subject) {
    console.log(this.name + " debugs " + studentObj.name + "'s code on " + subject);
  }
}


// STUDENT OBJECTS
const justin = new Student({
  name: "Justin Renninger",
  age: 25,
  location: "Pennsylvania",
  previousBackground: "Computer Science & Chemistry",
  className: "Full Stack Web Development",
  favSubjects: ['OOP', 'Polyurethanes', ]
});

const will = new Student({
  name: 'Will Smith',
  age: '40',
  location: 'California',
  previousBackground: 'Action Movies',
  className: 'Full Stack Web Development',
  favSubjects: ['The Fresh Prince', 'Anything with action']
});

const john = new Student({
  name: 'John Wick',
  age: 30,
  location: 'Unknown',
  previousBackground: 'Hitman',
  className: 'Full Stack Web Development',
  favSubjects: ['Guns', 'Stealth']
});

// INSTRUCTOR OBJECTS
const fred = new Instructor({
  name: 'Fred Flintstone',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'Ruby On Rails',
  specialty: 'Front-end',
  catchPhrase: `Yabba Dabba Doo`
});

const dan = new Instructor({
  name: 'Dan Levy',
  location: 'Bedrock',
  age: 32,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const colin = new Instructor({
  name: 'Colin Frasier',
  location: 'New Jersey',
  age: 49,
  favLanguage: 'C++',
  specialty: 'Computer Engineering',
  catchPhrase: `If you don't use get/set, you're wrong.`
});

// PROJECT MANAGER OBJECTS
const ww = new ProjectManagers({
  name: 'Wonder Woman',
  age: 26,
  location: 'Paradise Island',
  favLanguage: 'The Common Tongue',
  specialty: 'Whipping things',
  catchPhrase: 'By The Goddes!',
  gradClassName: 'Full Stack Web Development',
  favInstructor: 'Zeus'
});

const batman = new ProjectManagers({
  name: 'Bruce Wayne',
  age: 35,
  location: 'Bat Cave',
  favLanguage: 'Sonar',
  specialty: 'Being emo',
  catchPhrase: "I'm Batman",
  gradClassName: 'Full Stack Web Development',
  favInstructor: 'Alfred'
});

const walter = new ProjectManagers({
  name: 'Walter White',
  age: 60,
  location: 'Albuquerque',
  favLanguage: 'English',
  specialty: 'Chemistry',
  catchPhrase: "Jesse!",
  gradClassName: 'Full Stack Web Development',
  favInstructor: 'Dan Levy'
});