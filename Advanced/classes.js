/*
 * ES5 Classes
 * 
 */
function Plane(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
}

// métodos 'herdados' para todas as instancias
Plane.prototype.startEngines = function () {
    console.log('start engines...');
    this.enginesActive = true;
}


/*
 * ES6 Classes
 * 
 */
class Car {
    constructor(numEngines) {
        this.numEngines = numEngines;
        this.enginesActive = false;
    }

    startEngines() {
        console.log('start engines...');
        this.enginesActive = true;
    }
}


// Exercise
class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.horn);
	}
}

class Bicycle extends Vehicle {
    constructor(color = 'blue', wheels = 2, horn = 'honk honk') {
        // super recupera os valores 'this' do construtor-pai
        super(color, wheels, horn);
    }
}