// 1.   You have some 3 async functions. Need to create function which get that 3 functions
//    and some callback in arguments and call that callback when last async function was 
//    ending and send that function returning data to callback. That 3 functions have 1 
//    callback arguments.

{
    //// 

    ////
}


// 2.   You have some 3 async Promises. create some function (like promise all,race ….)
//    which will get promises and return some promise which will invoked on last finished 
//    promise time and will send that last returned value to resolve function, or reject some
//    error on error case	

{
    //// 
    const promise1 = new Promise(resolve => {
        setTimeout(() => {
            resolve('promise1');
        }, 2000);
    });
    const promise2 = new Promise(resolve => {
        setTimeout(() => {
            resolve('promise2');
        }, 4000);
    });
    const promise3 = new Promise(resolve => {
        setTimeout(() => {
            resolve('promise3');
        }, 3000);
    });


    const returnLastPromise = new Promise(() => {
        Promise.all([promise1, promise2, promise3])
            .then(result => console.log(result[result.length - 1]))
            .catch(err => console.log('Catch', err));
    });
    ////
}


// 3.   You have some 3 async Observables.
//    do same work(like 1 and 2) with observables
//    without using promise(only with observable methods).

{
    //// 
 ///callBack
    const firstCallBack = callBack => {
        console.log("First callback loading");
        setTimeout(() => {
            callBack(true);
        }, 2000);
    };

    const secondCallBack = callBack => {
        console.log("Second callback is loading");
        setTimeout(() => {
            callBack(true);
        }, 2000);
    };


    const lastCallBack = () => {
        firstCallBack((callBack) => {
            if (callBack) {
                secondCallBack(cb => {
                    if (cb) {
                        result.textContent = "Last callback is loading";
                    }
                })
            }
        })
    }

///promise
    const firstPromise = () => {
        console.log("First promise loading");
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, 2000);
        });
    };

    const secondPromise = () => {
        console.log("Second promise loading");
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, 2000);
        });
    };

    const lastPromise = () => {
        firstPromise().
            then(isTrue => {
                if (isTrue) {
                    return secondPromise().
                        then(() => console.log("Last promise is loading"))
                }
            })
    }

///observable
    const firstObserve = () => {
        console.log("First Observable is loading");
        return Rx.Observable.create(observer => {
            setTimeout(() => {
                observer.next(true);
            }, 2000);
        })
    };

    const secondObserve = () => {
        return Rx.Observable.create(observer => {
            console.log("Second Observable is loading");
            setTimeout(() => {
                observer.next(true);
            }, 2000);
        })
    };

    const lastObserve = () => {
        Rx.Observable
            .switchMap(() => firstObserve())
            .switchMap(isTrue => {
                if (isTrue) {
                    return secondObserve()
                }
            })
            .subscribe(() => {
                console.log("Last Observable is loading");
            })
    }

    ////
}


