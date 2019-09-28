// 1.   Create a Rectangle class. Rectangle should have: length and width.
//    It should have getters and setters for all fields. 
//    It should have getArea() method.It should have getArea() method. 
//    It should have getPerimeter() method.	
//    It should have a toString method	

{
    //// 
    class Rectangle {
        constructor(length, width) {
            this.length = length,
            this.width = width,
            this.toString = `object rectangle length ${this.length},width ${this.width}`
        }
    
        get length() {
            return this._length;
        }
    
        get width() {
            return this._width;
        }
    
        set length(value) {
            this._length = value
        }
    
        set width(value) {
            this._width = value
        }
    
        get area() {
            return this.length * this.width
        };
    
        get perimeter() {
            return 2 * (this.length + this.width)
        };
    }
    ////
}


// 2.   Create an object called shape that has the type property and a getType() method.
//    Define a Triangle() constructor function whose prototype is shape . Objects created 
//    with Triangle() should have three properties — a, b, and c , representing the lengths
//    of the sides of a triangle.	
//    Add a new method to the prototype called getPerimeter()	
                                // > var t = new Triangle(1, 2, 3);
                                // > t.constructor === Triangle;
                                // true
                                // > shape.isPrototypeOf(t);
                                // true
                                // > t.getPerimeter();
                                // 6
                                // > t.getType();
                                // "triangle"

{
    //// 
    const Shape = {
        type: "Triangle",
        getType: function () {
            return this.type
        }
    };
    function Triangle(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    Triangle.prototype = Shape;
    Triangle.prototype.getPerimeter = function () {
        return this.a * this.b * this.c
    };

    const triangle = new Triangle(1, 2, 3);
    triangle.constructor = Triangle

    console.log(triangle.constructor === Triangle)
    console.log(Shape.isPrototypeOf(triangle))
    console.log(triangle.getPerimeter())
    console.log(triangle.getType())
    ////
}


// 3.   Create an Author class and a Book class.
//    Author should have: name, email, gender. 
//    It should have getters.
//    It should have a toString method.	
//    Book should have: title, author(Author), price, quantity.	
//    It should have appropriate getters and setters.	
//    It should have a method: getProfit(), which calculates the profit from the book based	
//    on the price and quantity.	
//    It should have a toString method.	

{
    //// 
    class Autor {
        constructor(name, email, gender) {
            this.autorName = name;
            this.autorEmail = email;
            this.autorGender = gender;
        }
        get name() {
            return this.autorName;
        }
        get email() {
            return this.autorEmail;
        }
        get gender() {
            return this.autorGender;
        }
        toString() {
            return `My name is ${this.autorName}`
        }
    }
    
    class Book extends Autor {
        constructor(title, price, quantity) {
            super();
            this.bookTitle = title;
            this.bookPrice = price;
            this.bookQuantity = quantity;
        }
        
        get title() {
            return this.bookTitle;
        }
        set title(value) {
            this.bookTitle = value;
        }
        get price() {
            return bookPrice;
        }
        set price(value) {
            this.bookPrice = value;
        }
    
        getProfit() {
            return this.bookPrice * this.bookQuantity;
        }
        toString() {
            return `${autor.toString()}, book title is ${this.title}, book price is ${this.bookPrice}, book quantity ${this.bookQuantity}`;
        }
    }
    
     autor = new Autor("Kyle ", "kyle-simpson@gmail.com", "male")
     book = new Book("You don't know js", "40$", 1000)
     console.log(book.toString());  
    ////
}


// 4.   Write Car class, which have
//    properties: 
                // static finishPosition: number
                // name: string,
                // color: string(hashcode of color),
                // currentPosition: number(on start it equal to 0),
                // intervalPinter: number(setInterval pointer, that need for stopping interval)
                // speed: number(ex. 10, it means car can go 10px for 1 second),	
//    methods:	
//    reset() -> it will reset currentPosition to 0	
//    start() -> it should update currentPosition value by speed each 300ms(with	
//               setInterval) and log it to console, if currentPosition equal
//               or more then finishPosition,	
//           then call stop method	
//    stop() -> will stop interval and log`[name] car was finished`
//              set some finishPosition value for Car
//   create 3 Cars with different parameters
//   create function that will start car competition

{
    //// 
    class Car {
        constructor(name, color, speed) {
            this.name = name;
            this.color = color;
            this.speed = speed;
            this.currentPosition = 0;
            this.intervalPointer = 0;
        }
        static finishPosition = 500;
        reset = _ => this.currentPosition = 0;
        stop() {
            clearInterval(this.intervalPointer);
            this.reset();
        }
        start() {
            this.intervalPointer = setInterval(_ => {
                this.currentPosition += this.speed;
                    console.log(this.currentPosition);
                if (this.currentPosition >= Car.finishPosition) {
                    console.log(`${this.name} has stopped in ${this.currentPosition} position`)
                this.stop()
                }
            }, 300);
        }
    };
    
    mercedes = new Car('Mercedes', '#6b7078', 80)
    bmw = new Car('BMW', '#d7be5f', 140)
    audi = new Car('Audi', '#024476', 110)
    
    const competition = _ => {
        mercedes.start();
        bmw.start();
        audi.start();
    }
    
    competition();
    ////
}


// 5.  Write 4) with function prototype style

{
    //// 
   const Car = function(name, color, speed) {
        this.name = name;
        this.color = color;
        this.speed = speed;
        this.currentPosition = 0;
        this.intervalPointer = 0;
    };
    
    Car.finishPosition = 500;
    
    Car.prototype.reset = function () {
        return this.currentPosition = 0;
    };
    
    Car.prototype.start = function () {
        this.intervalPointer = setInterval(() => {
            this.currentPosition += this.speed;
            console.log(this.currentPosition);
            if (this.currentPosition >= Car.finishPosition) {
                console.log(`${this.name} has stopped in ${this.currentPosition} position`)
                this.stop()
            }
        }, 300);
    };
    
    Car.prototype.stop = function () {
        setTimeout(() => clearInterval(this.intervalPointer));
        this.reset();
    };
    
    
    const mercedes = new Car('Mercedes', '#6b7078', 80)
    const bmw = new Car('BMW', '#d7be5f', 140)
    const audi = new Car('Audi', '#024476', 110)
    
    const competition = _ => {
        mercedes.start();
        bmw.start();
        audi.start();
    }
    
    competition();
    ////
}