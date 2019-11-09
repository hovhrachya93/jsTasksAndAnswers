// 1.   You have some 3 async functions. Need to create function which get that 3 functions
//    and some callback in arguments and call that callback when last async function was 
//    ending and send that function returning data to callback. That 3 functions have 1 
//    callback arguments.

{
    //// 
    const async1 = (cb) => {
        setTimeout(() => {
            cb(1);
        }, 4000);
    };
    const async2 = (cb) => {
        setTimeout(() => {
            cb(13);
        }, 6000);
    };
    const async3 = (cb) => {
        setTimeout(() => {
            cb(5);
        }, 3000);
    };

    const callBack = (val) => console.log(val);

    const sendReturningData = (asyncFunctions, cb) => {
        let counter = asyncFunctions.length;
        for (const asyncFun of asyncFunctions) {
            asyncFun((res) => {
                counter--;
                if (counter === 0) {
                    cb(res);
                }
            });
        }
    }

    sendReturningData([async1, async2, async3], callBack);   
    ////
}


// 2.   You have some 3 async Promises. create some function (like promise all,race ….)
//    which will get promises and return some promise which will invoked on last finished 
//    promise time and will send that last returned value to resolve function, or reject some
//    error on error case	

{
    //// 
    const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve('promise1'), 2000));
    const promise2 = new Promise((resolve, reject) => setTimeout(() => resolve('promise2'), 4000));
    const promise3 = new Promise((resolve, reject) => setTimeout(() => resolve('promise3'), 3000));

    Promise.lastPromise = arr => new Promise((resolve, reject) => {

        if (!Array.isArray(arr)) {
            return reject(new TypeError('Promise.all accepts an array'));
        }

        let args = Array.prototype.slice.call(arr);
        if (args.length === 0){
            return resolve([]);
        }
        
        let remaining = args.length;
        const res = (i, val) => {
            try {
                if (val && (typeof val === 'object' || typeof val === 'function')) {
                    let then = val.then;
                    if (typeof then === 'function') {
                        then.call(val, (val) => res(i, val), reject);
                        return;
                    }
                }

                args[i] = val;
                if (--remaining === 0) {
                    resolve(val);
                }
            } catch (ex) {
                reject(ex);
            }
        }

        for (var i = 0; i < args.length; i++) {
            res(i, args[i]);
        }
    })

    Promise.lastPromise([promise1, promise2, promise3]).then((res) => console.log(res), (err) => console.log(err))
    ////
}


