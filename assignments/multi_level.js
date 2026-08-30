// Multilevel Inheritance
class Vehicle {
  constructor(name) {
    this.name = name;
  }
  start() {
    console.log(`${this.name} started.`);
  }
}
class Car extends Vehicle {
  drive() {
    console.log(`${this.name} is driving.`);
  }
}
class SportsCar extends Car {
  turbo() {
    console.log(`${this.name} has turbo boost.`);
  }
}
const myCar = new SportsCar("Ferrari");
myCar.start();
myCar.drive();
myCar.turbo();