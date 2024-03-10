class Shape {
    name;
    sides;
    sideLength;
    
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        const perimeter = this.sides + this.sideLength;
        console.log(`the perimeter of ${this.name} is ${perimeter}`)
    }
}

class Square extends Shape {
    
    constructor(sideLength) {
        super('square', 4, sideLength)
    }
    calcArea() {
        const area = this.sides * this.sideLength;
        console.log(`the area of ${this.name} is ${area}`);
    }
}
const square = new Square(5);
square.calcArea(); // the area of square is 20
square.calcPerimeter(); // the perimeter of square is 9

    /*
    1. A continuación nos gustaría que crearas una Square clase que herede de Shape /////
    
    2. y agregue un calcArea()método que calcule el área del cuadrado.
    
    3. También configure el constructor para que la name propiedad de Square para que las instancias de objetos se establezca automáticamente en square, y la sides propiedad se establezca automáticamente en 4. 
    
    4. Por lo tanto, al invocar el constructor, sólo debería necesitar proporcionar la sideLength propiedad.
    
    5. Cree una instancia de la Squareclase llamada squarecon los valores de propiedad apropiados y llame a sus métodos calcPerimeter()y calcArea()para demostrar que funciona bien.*/