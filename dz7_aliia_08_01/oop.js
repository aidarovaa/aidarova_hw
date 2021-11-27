class Transport {
    constructor(name, color, model, size) {
        this.name = name;
        this.color = color;
        this.model = model;
        this.size = size;
    }
    startEngine(){
        console.log("Engine is disable")
    }
}

class Car extends Transport {
    constructor(name, color, model, size) {
        super(name, color, model, size);
    }
    startEngine() {
        console.log("Engine is start")
    }
}

const car = new Car("bmw", "white", "x6", 100)

console.log(car)
car.startEngine()



class Yacht extends Transport {
    constructor(name, color, model, size) {
        super(name, color, model, size);
    }
    startEngine() {
        console.log("Engine is start");
    }
}

const yacht = new Yacht("Jack", "green", "12", 33)

console.log(yacht)
yacht.startEngine()

class Motorbike extends Transport {
    constructor(name, color, model, size) {
        super(name, color, model, size);
    }
    startEngine() {
        console.log("Engine is start")
    }
}

const motorbike = new Motorbike("Becky", "aquamarine", "M100RR", 55)

console.log(motorbike)
motorbike.startEngine()

