	let obj = {
	name: 'Himanshu',
	age: 26
	}
	let printDetails = function(state, country) {
		console.log(this.name)
		console.log(this.age)
		console.log(state)
		console.log(country)
	}

	Function.prototype.myBind = function(...args) {
		let fnReference = this
		let params = args.slice(1)
		return function(...params2) {
			fnReference.apply(args[0], [...params, ...params2])
		}
	}

	let p1 = printDetails.myBind(obj, 'Haryana')
	let p2 = printDetails.bind(obj, 'Haryana')
	//both will work same with this
	
	p1('India')
	p2('India')
	
	o/P: Himanshu
		 26
		 Haryana
		 India
		 
		 Himanshu
		 26
		 Haryana
		 India