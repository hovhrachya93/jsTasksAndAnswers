// 1.   Have 2 functions validateName(which get argument some string and return true if it
//    valid name or false otherwise (Name is valid if have 2 parts. like Jon Doe, and not 
//    empty)) and validateAge(get number argument and return true if value > 19 ).
//    Create some functions by currying,so I can filter list of users by valid name and age.	
//    (you can use compose or combine if need)	

{
    //// 
    const curryingUser = value => {
        if (value === "name") {
            return validateName = element => element.name.includes(" ");
        } else {
            return validateAge = ({ info }) => info.age > 19 ? true : false;
        }
    }

    const usersList = [
        {  name: 'Test', info: { age: 51 } },
        {  name: 'Test Testovich', info: { age: 18 } },
        {  name: 'Debug Testovich', info: { age: 21 } },   
    ]

    const filteredName = usersList.filter(curryingUser("name"));
    const filteredAge = usersList.filter(curryingUser("age"));
    ////
}


// 2.   Make the following object iterable:
                // let todoList = {
                //     todoItems: [],
                //     addItem(description) {
                //         this.todoItems.push({ description, done: false });
                //         return this;
                //     },
                //     crossOutItem(index) {
                //         if (index < this.todoItems.length) {
                //             this.todoItems[index].done = true;
                //         }
                //         return this;
                //     }
                // };
                // todoList.addItem('task 1').addItem('task 2').crossOutItem(0);
                // let iterableTodoList = // ???;
                //     for (let item of iterableTodoList) {
                //     console.log(item);
                // }
	
{
    //// 
    const todoList = {
        todoItems: [],
        addItem(description) {
            this.todoItems.push({ description, done: false });
            return this;
        },
        crossOutItem(index) {
            if (index < this.todoItems.length) {
                this.todoItems[index].done = true;
            }
            return this;
        }
    };
    
    todoList.addItem('task 1').addItem('task 2').crossOutItem(0);
    
    const todoListGenerator = function* () {
        yield* todoList.todoItems;
    }
    
    const iterableTodoList = todoListGenerator();
    
    for (let item of iterableTodoList) {
        console.log(item);
    }
    ////
}


// 3.   Determine the values logged to the console without running the code. Instead of just
//    writing down the values, formulate your thought process and explain to yourself how the
//    code runs line by line.
                // let errorDemo = function* () {
                //     yield 1;
                //     throw 'Error yielding the next result';
                //     yield 2;
                // }
                // let it = errorDemo();
                // // Execute one statement at a time to avoid
                // // skipping lines after the first thrown error.
                // console.log(it.next());
                // console.log(it.next());
                // console.log([...errorDemo()]);
                // for (let element of errorDemo()) {
                //     console.log(element);
                // }     

{
    //// 
    let errorDemo = function* () {
        yield 1;
        throw 'Error yielding the next result';
        yield 2;
    }
    
    let it = errorDemo();
    
    console.log(it.next()); // {value: 1, done: false}
    console.log(it.next()); // Uncaught Error yielding the next result
    console.log([...errorDemo()]); //  Uncaught Error yielding the next result
    
    for (let element of errorDemo()) {
        console.log(element);
    }  
         //քանի որ yield 1 եւ yield 2 մեջտեղը կա throw 2-րդ next-ի կանչի դեպքում դուրս ե բորում error
         //քանի որ դուրս է բերբել error, 3 console.log spread operator չի կատարվի քանի որ դուրս է բերբել error
         // for-of ktpi 1 
         // հետո error կանգնեցնում է loop execution
    ////
}


// 4.   Create an infinite sequence that generates the next value of the Fibonacci sequence.  
//    The Fibonacci sequence is defined as follows:  
                // fib(0) = 0
                // fib(1) = 1
                // for n > 1, fib(n) = fib(n - 1) + fib(n - 2)
{
    //// 
    function* fibonacci(){
        let fn1 = 0;
        let fn2 = 1;
        while(true){
            let current = fn1;
            fn1 = fn2
            fn2 = current + fn1;
            yield current
        }
    }
    const fib = fibonacci()
                /*fib.next().value*/  //0
                /*fib.next().value*/  //1
                /*fib.next().value*/  //1
                /*fib.next().value*/  //2
    ////
}


// 5.   Create async generator function which will get 3 promise arguments and will yeald 
//    from latest to first finished promise values
                // example -> for
                // Promise1 -> (200ms, result: 15),
                // Promise2 -> (600ms, result: 17),
                // Promise3 -> (500ms, result: 42),
                // result will be 17, 42, 15.

{
    ////  
       
    ////
}
