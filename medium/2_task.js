// 1.   Write a function, which receives an array as an argument which elements arrays of 
//    numbers. Find biggest negative number of each array. Return product of that 
//    numbers.If there is not any negative number in an array, ignore that one. Check that 
//    items of the given array are arrays.	

{
    //// 
    const multNegativeItems = (arr) => {
        const checkisArray = arr.every(itemArr => Array.isArray(itemArr))
        if (!checkisArray) {
            return 'Invalid Argument'
        }
    
        const filterNegativeArr = arr.map((subArr) => subArr.filter(item => item < 0))
        if (filterNegativeArr.filter(array => array.length !== 0).length === 0) {
            return 'No negativs'
        }
    
        const findMaxNegativeItem = filterNegativeArr.map(subNegativeArr => subNegativeArr.length === 0 ? true : Math.max(...subNegativeArr))
        return checkisArray ? findMaxNegativeItem.reduce((acc, item) => acc * item) : NaN
    }
    ////
}


// 2.   Given an array of strings and numbers. Print the number of integers and the number 
//    of strings in the array. 
	
{
    //// 
    const checkNumOrString = arr => {
        const isNumber = arr.filter(item => {
            if (typeof item === 'number') {
                return true;
            }
        });
        const isString = arr.filter(item => {
            if (typeof item === 'string') {
                return true;
            }
        })
        return `Numbers: ${isNumber.length}, Strings: ${isString.length}`
    }
    ////
}


// 3.   Given an array consisting from the arrays of numbers (like a two-dimensional array). 
//    Find sum of each row and print them as an array.
 	
{
    //// 
      const sumOfArray = (arr) => arr.map((subArr) => subArr.reduce((acc, item) => acc + item));
    ////
}


// 4.   Given an array of integers. Write a function that return new array from first array,  
//    where  removed even numbers, and odd numbers was multiplied with new array  
//    length 

{
    //// 
    const removeEvenMultOddArrLength = arr => {
        const filterArr = arr.filter(item => item % 2 !== 0);
        const filtArrlen = filterArr.length;
        const multArrLength = filterArr.map(elem => elem * filtArrlen);
       return multArrLength;
      }
    ////
}


// 5.   Given an array of numbers. Create an array containing only elements once 

{
    //// 
    const conteinElementOnce = arr => arr.filter((item, index) => arr.indexOf(item) === index);
    ////
}


// 6.   Given an array. Create the array which elements are products between two   
//    neighbours.  

{
    //// 
    const productsBetweenNeighbours = arr => {
        const outputArray = arr.map((array, i) => array * arr[i + 1])
        outputArray.pop();
       return outputArray
    }
    ////
}


// 7.   Given an object. Invert it (keys become values and values become keys). If there is    
//    more than key for that given value create an array.  

{
    //// 
    const invertObjectKeysValues = InputObj => {
        const outputObject = {};
        for (let key in InputObj) {
          if (InputObj.hasOwnProperty(key)) {
            if (!outputObject[InputObj[key]]) {
              outputObject[InputObj[key]] = key;
            } else {
              if (!Array.isArray(outputObject[InputObj[key]])) {
                outputObject[InputObj[key]] = [outputObject[InputObj[key]]];
              }
              outputObject[InputObj[key]].push(key);
            }
          }
        }
        return outputObject;
      }
    ////
}


// 8.   Given an object. Write a function that creates a deep copy of it.

{
    //// 
    const deepCopy = obj => {
        const newCreatedObject = {};
        for (let key in obj) {
            const objectValue = obj[key];
            typeof(objectValue) === "object" ? newCreatedObject[key] = deepCopy(objectValue) : newCreatedObject[key] = objectValue;
        }
        return newCreatedObject
    }
    
    const check = _ => {
        const a = { a: '1', b: { a: 2 } }
        const b = deepCopy(a)
        return b.b.a !== 123
    }
    ////
}
