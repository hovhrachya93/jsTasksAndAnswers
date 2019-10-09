// 1.   Swap 2 variables.
//  a) With third variable
//  b) With arithmetic operators

{
    ////
     let x;
     let y;
     let c = x;
          x = y;
          y = c;
     ////
 }
 // b.
 {
    ////
     let x = 10;
     let y = 20;
     x = x + y;
     y = x - y;
     x = x - y;
    ////
 }
 // with destructuring
     {
         ////
         [a, b] = [b, a]
         ////
     }

// 2.   Given three numbers. Find the maximum one (Only use &&, || and comparison
//  operators)

{
    ////
    a.num1 > num2 && num1 > num3 && `${num1}` || num2 > num3 && `${num2}` || `${num3}`
    ////
}
///
{
    ////
    b.num1 == num2 && num2 == num3 && "numbers are equally" || num1 > num2 && num1 > num3 && "num1" || num2 > num1 && num2 > num3 && "num2" || num3 > num1 && num3 > num2 && "num3" || "there isn't biggest number"
    ////
}

// 3.   Given an array of integers. Write a function that returns a new array containing only
//  odd numbers multiplied with new array length

{
    ////
    const removeEvenMultOdd = arr => {
        const filterArr = arr.filter(item => item % 2 !== 0);
        const filtArrlen = filterArr.length;
        const multArrLength = filterArr.map(elem => elem * filtArrlen);
        return multArrLength;
    }
    ////
 }

// 4.   Given an array of integers. Write a function which will get that array and create
//  new array, with size equal to first positive element of given array (If no positive element
//  return []) and content of returned array will be next elements of given array (repeated, if
//  needed).
{
    ////
    const arrlengt = arr => {
        let newArrLength = 0;
        let arrIndex = 0;
        let length = arr.length - 1
        for (let i = 0; i <= length; i++) {
            if (arr[i] > 0) {
                arrIndex = i + 1;
                newArrLength = arr[i];
                break;
            }
        }
        let newArr = new Array(newArrLength);
        let prevArrIndex = arrIndex;
        for (let i = 0; i < newArrLength; i++) {
            newArr[i] = arr[arrIndex];
            arrIndex++
            if (arrIndex == arr.length) {
                arrIndex = prevArrIndex;
            }
        }
        return newArr
    }
    ////
 }

// 5.   Given an array of integers. Write a function which will get that array and return an
//  object with 2 properties even6 and odd7. Values of that properties will be
//  even6-> array of all positive numbers that are divisible by 6
//  odd7-> array of all positive odd numbers that are divisible by 7
{
    ////
    const sixSevan = arr => {
        let obj = {
            even6: [],
            even7: []
        }
        obj.even6 = arr.filter((item) => item > 0 && item % 6 == 0)
        obj.even7 = arr.filter((item) => item > 0 && item % 2 === 0 && item % 7 == 0)
        return obj
    }
    console.log(sixSevan([14, 12, 20, 60, 70, 50, -14, 21]))
    ////
 }

//6.  Create User class. User needs to have name (a string containing only letters), age
//  (a number in the range [0, 200]) and birthdate (only date type), validate that
//  properties by getters and setters.original property names need to be private (do it
//  using Symbol)
    {
        ////
    nameSymbol = Symbol();
    ageSymbol = Symbol();
    birthYearSymbol = Symbol()
    class User {
        get name() {
            return this[nameSymbol];
        }
        get birthYear() {
            return this[birthYearSymbol];
        }

        get agebirthYear() {
            ageDifMs = Date.now() - this[birthYearSymbol].getTime();
            ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }

        set name(value) {
            for (var i = 0; i <= value.length; i++) {
                if (A < value.substring(i, 0) < z) {
                    this[nameSym] = value;
                } else {
                    throw new Error("You must write all in strins");
                }
            }
        }
        set birthYear(value) {
            if (typeof (this.value) == "number") {
                this[birthYearSymbol] = value
            } else {
                throw new Error("You must write all in numbers");
            }
        }

        set age(value) {
            if (typeof (this.value) == "number" && 0 < this.value < 200) {
                this[ageSymbol] = value
            } else {
                throw new Error("You must write all in numbers and in rang from 0 to 200");
            }
        }
    }
        ////
}
//7. What is the difference ?
   {
       ////
    function User(name) {
        this.name = name;
        this.printName = function () { console.log(this.name); };
    }
       ////
   }

   {   ////      
    function User(name) {
        this.name = name;
    }
    User.prototype.printName = function () { console.log(this.name); };
        ////
   }

   {
       ////
         "Առաջին դեպքում this.printMetode օբյեկտի մեջ է եւ ամեն անգամ NEW անելուց կանչվում է"
         "երկրորդ դեպքում կլինի միայն prototype-ի մեջ եւ անգամ NEW անելուց չի ստեղծի"
       ////
   }

//8.  Write a User function constructor which will add name and age properties into
//  object. Create Player function constructor, which will extend from User and will have
//  own specific method play which will log string “Player player_name is playing”.
{
    ////
    function User(name, age) {
        this.name = name;
        this.age = age;
    }

    function Player() {
        User.call(this)
    }
    Player.prototype = User;
    Player.prototype.play = () => `Player ${this.name} is playing`
    ////
}

// 9.  Implement 8 using classes. Add static property counter on Player, which will count
//    how many instances of Player class were created.
{
    ////
    class User {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    class Player extends User {
        constructor(name, age, ) {
            super(name, age, player, count);
            this.count = 0;
        }
        static countInstances() {
            this.count += 1;
        }

        get player() {
            return `Player ${this.name} is playing`
        }
    }
    ////
}


// 11.  Write a generator named arithmeticProgression which takes 2 parameters:
//    firstElement, delta and generates an arithmetic sequence of numbers such that the
//   difference of any two successive members of the sequence is a constant (delta). that
{
    ////
    function* arithmeticProgression(x,y) {
        yield x;
        while(true){
            x=x+y;
            yield x
        }
      }
      let aritProg = arithmeticProgression(5,3);
    ////
}