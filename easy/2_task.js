// 1. Given two numbers 1 and 10;

{
    //// 
    let num1 = 1;
    let sum = 0;
    const num2 = 10;

// a. Print all number between 1 and 10.

{
     ////
     for (let i = ++num1; i < num2; i++) {
        console.log(i)
    }
     ////
}

// b. Print all number between 1 and 10 except 6.  

{
    ////

    // 1.
 {
     ////
    for (let i = num1; i <= num2; i++) {
        i!=6 ? console.log(i) : 0
     }
     ////
}

    // 2.
{   
    ////
     for (let i = 2; i <= 10; i++) {
        if(i!=6){
            console.log(i)
        }     
    }
    ////
} 
    //3.
{   
    //// 
    for (let i = num1; i <= num2; i++) {
        if(i==6){
            continue 
        }
        console.log(i)
    }
    ////
}    
    ////
}

// c. Print all even number between 1 and 10.

{
    ////
    for (let i = ++num1; i < num2; i++) {
        i%2!=0 ? console.log(i) : 0      
    }
    ////
}

// d. Calculate sum of all numbers between 1 and 10 (using loop).


{
    ////
    for (let i = ++num1; i < num2; i++) {
            sum += i
    }
    ////
}
    //without loop
{
    ////
    let n = num2 - 1
    sum = (n * (n + 1)) / 2;
    sum -= 1
    ////
}

//e. Calculate sum of all numbers between 1 and 10 except 8.

{
    ////
    for(let i = ++num1; i < 10; i++){
        if(i==8){
            continue
        }
        sum += i
    }
    ////
}

// f. Calculate sum of all odd numbers between 1 and 10.

{
    ////
    for (let i = ++num1; i < num2; i++) {
        if(i % 2 != 0){
            sum += i
        }
    }
    ////
}

// g. Calculate sum of squares of all numbers between 1 and 10.

{
    ////
    for(let i = ++num1; i < 10; i++){
        // sum += Math.pow(i,2);
        // sum += i*i;
        sum += i**2;
    }
    ////
}
    ////
}


// 2.   Insert a digit and a number. Check whether the digits contains in the number or
//    not.(don`t use string)

{
    //// 
    const digitsContainsNumber = (number, digit) => {
        let check;
        let answer;
        while (digit >= 1) {
            if (number === digit % 10) {
                check = 1;
                break;
            }
            digit = Math.floor(digit / 10);
            check = 0;
        }
        answer = check === 1 ? check === 0 ? check : "Yes" : "No";
        return answer;
    }
    ////
}


// 3. Enter a number. Reverse its first and last digits. Print the new number. 

{
    //// 
    const FirstLastDigitsReverse = num => {
        let stringOfNumber = num.toString();
        const lastDigit = num % 10;
        const firstDigit = (findeFirstDigit = digit => digit < 10 ? digit : findeFirstDigit((digit - digit % 10) / 10))(num);
        const reversenumber = num >= 10 ? lastDigit + stringOfNumber.slice(1, stringOfNumber.length - 1) + firstDigit : num;
        return reversenumber;
    }   
    ////
}


// 4. Enter a number. Find the difference between its biggest and smallest digits. 

{
    //// 
    const differenceBiggestSmallestDigits = num => {
        let biggest = 0;
        let smallest = 9;
        let answer;
        while (num >= 1) {
            num % 10 > biggest ? biggest = num % 10 : null
            num % 10 < smallest ? smallest = num % 10 : null
            num = Math.floor(num / 10)
        }
        answer = biggest - smallest;
        return answer;
    }
    ////
}


// 5. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise. 

{
    //// 
    const isPrime = num => {
        if (num < 3) return "yes";
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return "no";
            }
        }
        return "yes"
    }
    ////
}