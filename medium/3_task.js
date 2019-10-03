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
            this.width = width
        }

        get toString() {
            return `object rectangle length ${this.length},width ${this.width}`
         } 
 
        get rectangleLength() {
            return this.length;
        }
    
        get rectangleWidth() {
            return this.width;
        }
    
        set rectangleLength(value) {
            this.length = value
        }
    
        set rectangleWidth(value) {
            this.width = value
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
    class Author {
        constructor(name, email, gender) {
            this.name = name;
            this.email = email;
            this.gender = gender
        }
    
        get name() {
            return this._name;
        }
        get email() {
            return this._email;
        }
        get gender() {
            return this._gender;
        }
        set name(name) {
            if (typeof name === 'string' && name.length > 0) {
                return this._name = name;
            }
        }
        set email(email) {
            if (typeof email === 'string' && /\S+@\S+\.\S+/.test(email)) {
                return this._email = email;
            }
        }
        set gender(gender) {
            if (typeof gender === 'string' && (gender === 'Male' || gender === 'Female')) {
                return this._gender = gender;
            }
        }
        toString() {
            return `Author with name: ${this._name} and email: ${this._email}`
        }
     }
    
    
     class Book {
        constructor(title, author, price, quantity) {
            this._title = title;
            this.author = author;
            this.price = price;
            this.quantity = quantity;
        }
        get title() {
            return this._title;
        }
        get author() {
            return this._author;
        }
        get price() {
            return this._price;
        }
        get quantity() {
            return this._quantity;
        }
        set title(title) {
            return this._title = title;
        }
        set author(author) {
            if (author instanceof Author) {
                return this._author = author;
            }
        }
        set price(price) {
            if (typeof price === 'number' && price > 0) {
                return this._price = price;
            }
        }
        set quantity(quantity) {
            if (typeof quantity === 'number' && quantity >= 0) {
                return this._quantity = quantity;
            }
        }
        getProfit() {
            return this._price * this._quantity;
        }
        toString() {
            return `Book title is: ${this._title} and price: ${this._price}`
        }
     }
    
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
        static finishPosition = 100;
        static haveWinner = false;
        constructor(name, color, speed) {
            this.name = name;
            this.color = color;
            this.speed = speed;
            this.startPosition = 0;
            this.intervalPointer = 0;
        }
        toString() {
            return `color of this car is ${this.color}, speed of this car is ${this.speed} px/s`;
        }
        stop() {
            clearInterval(this.intervalPointer);
            this.startPosition = 0;
        }
        start() {
            this.intervalPointer = setInterval(() => {
                this.startPosition += this.speed;
                if (this.startPosition >= Car.finishPosition) {
                    this.stop();
                    if (!Car.haveWinner) {
                        Car.haveWinner = true;
                        console.log(`The winner is ${this.name}(${this})`);
                    }
                }
            }, 100);
        }
    }
    
    const randomRange = () => Math.random() * 150 + 50;
    
    const competition = (width) => {
        Car.haveWinner = false;
        Car.finishPosition = width;
    
        const car1 = new Car('Mercedes', 'grey', randomRange())
        const car2 = new Car('BMW', 'yellow', randomRange())
        const car3 = new Car('Audi', 'black', randomRange())
        const car4 = new Car('Nissan', 'white',  randomRange())
    
        car1.start();
        car2.start();
        car3.start();
        car4.start();
    }
    
    competition(500)
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
    
    const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const mercedes = new Car('Mercedes', '#6b7078', randomRange(60,120))
    const bmw = new Car('BMW', '#d7be5f', randomRange(60,120))
    const audi = new Car('Audi', '#024476', randomRange(60,120))
    
    const competition = _ => {
        mercedes.start();
        bmw.start();
        audi.start();
    }
    
    competition();
    ////
}