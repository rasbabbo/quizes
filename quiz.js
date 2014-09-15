function Person(name, height, age, sleeping) {
	this.name = name,
	this.height = height,
	this.age = 0,
	this.sleeping = true;
}

Person.prototype.eat = function() {
	this.eat = eat;
};

Person.prototype.sleep = function () {
	this.sleep = false,
	this.wakeUp = true
};

function Student(studying) {
	this.studying = true;
}

Student.prototype.study = function() {
	this.study = true,
	stopStudy = false
}



Student.prototype = new Person
Student.prototype.constructor = Student;





