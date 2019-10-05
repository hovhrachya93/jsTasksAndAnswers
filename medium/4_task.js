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
    
    function sendReturningData() {
        let count = 0;
        let i = 0;
        const args = arguments;
        const cb = res => (++count) === 3 ? args[args.length - 1](res) : 1
        while (i < args.length - 1) {
            args[i](cb)
            i++;
        }
    }
    
    sendReturningData(async1, async2, async3, callBack);
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
    
    const returnLastPromise = args => new Promise((resolve, reject) => {
        let count = 0;
        let i = 0;
        const res = (res) => (++count) === 3 ? resolve(res) : 1
        const rej = err => err ? reject(err) : 1 
        while(i < args.length){
            args[i].then(res, rej)
            i++
        }
    })
    
    returnLastPromise([promise1, promise2, promise3]).then((res) => console.log(res), (err) => console.log(err));
    ////
}


// 3.   You have some 3 async Observables.
//    do same work(like 1 and 2) with observables
//    without using promise(only with observable methods).

{
    //// 
    const observer1 = Rx.Observable(observer => setTimeout(() => observer.next('observer1'), 2000));
    const observer2 = Rx.Observable(observer => setTimeout(() => observer.next('observer2'), 4000));
    const observer3 = Rx.Observable(observer => setTimeout(() => observer.next('observer3'), 3000));

    const returnLastObservable = new Observable(args => Rx.Observable(observer => {
        let count = 0;
        let i = 0;
        const obs = obs => (++count) === 3 ? observer(obs) : 1
        while (i < args.length) {
            args[i].subscribe.next(obs)
            i++
        }
    }))

    returnLastObservable().subscribe({
        next: [observer1, observer2, observer3],
        complete: obs => console.log(obs)
    });
   ////
}


