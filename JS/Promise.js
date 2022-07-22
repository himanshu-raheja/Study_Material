	// Promise.all() method waits for fulfillment 
	p1 = Promise.resolve('Hello')
	Promise {<fulfilled>: 'Hello'}

	const p2 = 200;
	
	const p3 = new Promise((resolve, reject) => {
		setTimeout(resolve, 100, 'geek');
	})
	
	Promise.all([p1, p2, p3]).then(function(values) {
        document.write(values);
    });
	
	// O/P: 'Hello', 200, geek
	
	
	//  If one of the promises fails, then all the rest of the promises fail and result will be displayed in the console in the form of an Error 
	// Promise that resolves after a given time
	const tOut = (t) => {
	  return new Promise((resolve, reject) => {
		setTimeout(() => {
		  if (t === 2000) {
			reject(`Rejected in ${t}`)
		  } else {
			resolve(`Completed in ${t}`)
		  }
		}, t)
	  })
	}
	 
	const durations = [1000, 2000, 3000]
	 
	// Array contains some time durations
	const promises = [] //empty array
	 
	durations.map((duration) => {
		promises.push(tOut(duration))
		// Pushing durations in the promises array
	})
	 
	// Passing an array of pending promises to Promise.all
	Promise.all(promises).then(response => document.write(response))
	// Promise.all cannot be resolved, as one of the
	// promises passed, got rejected.
	 
	.catch(error => document.write(`::Error::<br> ${error}`))
	// Promise.all throws an error.
	
	const original = Promise.resolve(33);
	const cast = Promise.resolve(original);
	cast.then(function(value) {
	  console.log('value: ' + value);
	});
	console.log('original === cast ? ' + (original === cast));

	// logs, in order:
	// original === cast ? true
	// value: 33
	
	// Resolving a thenable object
	const p1 = Promise.resolve({
	  then: function(onFulfill, onReject) { onFulfill('fulfilled!'); }
	});
	console.log(p1 instanceof Promise) // true, object casted to a Promise

	p1.then(function(v) {
		console.log(v); // "fulfilled!"
	  }, function(e) {
		// not called
	});

	// Thenable throws before callback
	// Promise rejects
	const thenable = { then: function(resolve) {
	  throw new TypeError('Throwing');
	  resolve('Resolving');
	}};

	const p2 = Promise.resolve(thenable);
	p2.then(function(v) {
	  // not called
	}, function(e) {
	  console.error(e); // TypeError: Throwing
	});

	// Thenable throws after callback
	// Promise resolves
	const thenable = { then: function(resolve) {
	  resolve('Resolving');
	  throw new TypeError('Throwing');
	}};

	const p3 = Promise.resolve(thenable);
	p3.then(function(v) {
	  console.log(v); // "Resolving"
	}, function(e) {
	  // not called
	});	
	
	// infinite recursion
	
	let thenable = {
	  then: (resolve, reject) => {
		resolve(thenable)
	  }
	}

	Promise.resolve(thenable)  // Will lead to infinite recursion.
	
	
	 let first_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved First after 1 second");
        }, 1000);
    });
  
    let second_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved First after 2 seconds");
        }, 2000);
    });
  
    try {
        let result_1 = Promise.all(
            [first_promise, second_promise]);
  
        result_1.then((data) => console.log(data));
  
        let result_2 = Promise.allSettled(
            [first_promise, second_promise]);
          
        result_2.then((data) => console.log(data));
    } catch (error) {
        console.log(error);
    }
	
	
	
	
	let rejectedPromise = new Promise((resolve, reject) => {
    reject('I am rejected')
	})
	
	Promise.all([promise, promise2, rejectedPromise]).then(response => console.log(response))
	
	// O/P: Promise {<rejected>: 'I am rejected'}

	Promise.allSettled([rejectedPromise, promise, promise2]).then(response => console.log(response))
	
	// O/P: 0: {status: 'rejected', reason: 'I am rejected'}
	//		1: {status: 'fulfilled', value: 'In 2 seconds'}
	//		2: {status: 'fulfilled', value: 'In 1 second'}
	
	
	//Finally block
	
	let obj = new Promise((resolve, reject) => {
		reject('Failed')
	})

	obj.then(response => console.log(response)).catch(ex => {
		console.log(ex)
	}).finally(function() {
		console.log('I am at the last guys')
	})
	// O/P: Failed
	//	    I am at the last guys