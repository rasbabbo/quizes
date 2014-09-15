function Person(name, height, age, sleeping) {
	this.name = name,
	this.height = height,
	this.age = 0,
	this.sleeping = true
};

Person.prototype








Make a Person constructor with attributes: name:string, height:string, age:number, sleeping:boolean.

Add prototype methods to person: eat, sleep, and wakeUp. (The sleep and wakeUp methods should toggle sleeping to true/false, and eat should return an eating noise.)

Make a Student prototype that inherits from person and has the additional attribute of studying:boolean.

Add methods to Student called study, and stopStudy to toggle studying

Override the sleep method on student to only run sleep if studying is false.