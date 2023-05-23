class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getDescription() {
    return this.make + " " + this.model + " " + this.year;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }
  getDescription() {
    return this.make + " " + this.model + " " + this.year + " " + this.range;
  }
}

const newElectricCar = new ElectricCar("Tesla", "Model S", "2009", "300");

console.log("The Electric Car is a:", newElectricCar.make);
console.log("The Electric Car model is:", newElectricCar.model);
console.log("The Electric Car was buildt in:", newElectricCar.year);
console.log("The Electric Car range is:", newElectricCar.range);
