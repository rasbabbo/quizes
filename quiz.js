function Person(name, height, age, sleeping) {
	this.name = name,
	this.height = height,
	this.age = 0,
	this.sleeping = true
};

Person.prototype.eat = function() {
	// this.eat = eat; - not needed just return some clatter:
	return "chomp"

};

Person.prototype.sleep = function () {
	// this is where you should put in a conditional study function
	// any time there is a decision to be made - place that conditional in
	if (this.sleeping === false) {
		this.sleeping = true;
	} else { 
		console.log(this.name + "awake");
	}
};

function Student(studying) {
	this.studying = true;
}
// place the inheretor in the proper place - in order to have the appropriate properties:
// not at the end of everything
Student.prototype = new Person()
Student.prototype.constructor = Student;


Student.prototype.study = function() {
	if (this.studying === false) {
		this.sleeping = true;
	} else {
		console.log(this.studying + "lemme alone");
		}
	};

Student.prototype.stopStudy = function() {
	if (this.studying === true) {
		this.sleeping = false;
	} else {
		console.log(this.studying + "freakin done");
	}
};

Student.prototype.sleep = function() {
	if(this.studying === false) {
		this.sleep = true;
	}
};


// where to set up inhereitence; where to place constructor; important to diagram; 






