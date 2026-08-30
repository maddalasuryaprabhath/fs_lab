// Multiple Inheritance using mixins
const Flyable = {
  fly() {
    console.log("Flying...");
  }
};
const Swimmable = {
  swim() {
    console.log("Swimming...");
  }
};
class Bird {
  constructor(name) {
    this.name = name;
  }
}
class Duck extends Bird {
  constructor(name) {
    super(name);
    Object.assign(this, Flyable, Swimmable);
  }
}
const duck = new Duck("Donald");
console.log(duck.name);
duck.fly();
duck.swim();