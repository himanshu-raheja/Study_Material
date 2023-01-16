
function createIncrement() {​​​​​​ 
    let count = 0; 
    function increment() {​​​​​​  
        count++; 
    }​​​​​​ 
    let message = `Count is ${​​​​​​count}​​​​​​`; 
    function log() {​​​​​​ 
        console.log(message); 
    }​​​​​​  
    return [increment, log];
}​​​​​
​const [increment, log] = createIncrement();
increment(); 
increment(); 
increment(); 
log(); //count is 0


var b = 1;
function outer(){​​​​​​ 
    var b = 5 
    function inner(){​​​​​​
     console.log(this.b); 
     b++; 
     console.log(b); 
     var b = 3; 
     console.log(b) 
    }​​​​​​ 
    inner();
}
​​​​​​outer(); 
//1
//Nan
//3

var name = "ashish"
function sayHi() {​​​​​​ 
    console.log(name); 
    console.log(age);
    var name = 'John'; 
    let age = 24; 
}
​​​​​​sayHi();
//undefined
//Intialization error

// 12 + 14 + "a" = 26a

// a - b + "12" = NaN12

