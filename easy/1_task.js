// 1. What are the outputs of these expressions: '7' + 1 + 5 and 1 + 5 + '7';
//     '76', '157';
//     715, 157;
//     '715', ‘67’;
//     '76', ‘67’.
                                    //'7' + 1 + 5 = '71' + 5 = '715'
                                    //1 + 5 + '7' = 6 + '7' = '67'

                                    //  '715', ‘67’;

// 2. Swap 2 variables.
//      a. With third variable;
//      b. With arithmetic operators.
            // a. 
                // let x;
                // let y;
                // let c = x;
                //      x = y;
                //      y = c;

            // b.    
                // let x = 10;
                // let y = 20;
                // x = x + y;
                // y = x - y;
                // x = x - y; 
                 
            // with destructuring
                //  [a, b] = [b, a]


// 3. Check whether a given number is negative. Print “yes”, if it is not negative,
//     print “no” otherwise.

            //number < 0 && "yes" || "no"


// 4. Given two numbers print 1 if one of them is divisible by the other one,
//     otherwise print 0.

        //(num1 % num2 === 0) && "1") || ((num2 % num1 === 0)) && "1" || "0"

// 5. Given three numbers. Find the maximum one. 
        //a. num1 > num2 && num1 > num3 && `${num1}` || num2 > num3 && `${num2}` || `${num3}`
       //b. num1 == num2 && num2 == num3 && "numbers are equally" || num1 > num2 && num1 > num3 && "num1" || num2 > num1 && num2 > num3 && "num2" || num3 > num1 && num3 > num2 && "num3" || "there isn't biggest number"

// 6. Given string ‘test’. Use variables and string methods 
//     and print ‘tetsetesesesesteest’;

        // const inputString = "test";
        // const te = inputString.slice(0,2)
        // const tset = inputString.split("").reverse().join("");
        // const eseseses = inputString.slice(1,3).repeat(4);
        // const est = inputString.slice(1,4);  
        // const outputString =`${te}${tset}${eseseses}${te}${est}`


