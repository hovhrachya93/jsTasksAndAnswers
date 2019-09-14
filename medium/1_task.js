// 1. Given a number n ( n > 0 ) . Print Fibonacci series up to n . 

{
    //// 
    const fibonacciSeriesUpToArg = num => {
        let fibSeries = "";
        const fibonacci = num => num < 2 ? num : fibonacci(num - 1) + fibonacci(num - 2)
    
        for (let i = 0; fibonacci(i) < num; i++) {
            fibSeries += `${fibonacci(i)}, `
        }
        return fibSeries;
    }    
    ////
}


// 2.   Write a recursive function to determine whether 
//    all digits of the number are odd or not.

{
    //// 
    const isOdd = number => {
        let last = number % 10;
        // return number < 10 ? number % 2 > 0 : (isOdd((number - last) / 10)) % 2 > 0;
        if (number < 10) {
          return number % 2 > 0
        } else {
            return (isOdd((number - last) / 10)) % 2 > 0;
        }
    }
    ////
}


// 3.   Write a function that accepts a string(a sentence) as a parameter and finds the 
//    longest word within the string․ If there are several words which are the longest ones,
//    print the last word(words can be separated by space, comma or hyphen).,

{
    //// 
    const longestWord = inputString => {
        let longest = "";
        let point = 0;
        let prevWorld;
        for (let i = 0; i < inputString.length; i++) {
            prevWorld = inputString.slice(point, i).replace(/[^a-zA-Z ]/g, "");
            if (inputString[i] == " ") {
                if (prevWorld.length < longest.length) {
                }
                else
                    longest = prevWorld;
                point = i + 1;
            }
        };
        return longest;
    }
    ////
}


// 4.   Write a function to find longest substring in a given a string without repeating
//    characters except space character.
//    If there are several, return the last one. Consider that all letters are lowercase.

{
    /////      
    const longestSubstring = inputString => {
        let output = "";
        let temp = "";

        for (let i = 0; i < inputString.length; i++) {
            if (!temp.includes(inputString[i]) || inputString[i] == " ") {
                temp += inputString[i];
            } else {
                temp = temp.trim();
                output = output.length <= temp.length ? temp : output;
                i = i - temp.length + 1;
                temp = "";
            }
        }
        return output;
    }
    ////
}


// 5.   Write a function, which receives two numbers as arguments and finds all numbers
//    between them such that each digit of the number is even. The numbers obtained
//    should be printed in a comma-separated sequence on a single line.

{
    /////      
    const allEvenNumbersBetweenArgs = (num1, num2) => {
        let output = "";
        let last;
        // const check = i => i < 10 ? (i % 2 == 0) : i % 10 % 2 == 0 && check((i - i % 10) / 10);
        const check = i => {
            last = i % 10;
            if (i < 10) {
                return (i % 2 == 0)
            } else {
                return last % 2 == 0 && check((i - last) / 10)
            }
        }
    
        for (let i = num1 + 1; i < num2; i++) {
            if (check(i)) {
                output += `${i}, `
            }
        };
    
        output = output.length == 0 ? "Such numbers does not exist." : output;
        return output;
    }
    ////
}
