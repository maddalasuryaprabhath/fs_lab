// Hierarchical Inheritance
class Shape {
  constructor(color) {
    this.color = color;
  }

  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const c = new Circle("Red", 5);
const r = new Rectangle("Blue", 4, 6);

console.log(c.area());
console.log(r.area());