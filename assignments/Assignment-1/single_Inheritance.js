// Single Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}
class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking.`);
  }
}
const d = new Dog("Tom");
d.eat();
d.bark();