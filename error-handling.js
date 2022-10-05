// 1.
function sum(array) {
  let sum = 0;


try {
  if(Array.isArray(array) === true ){
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  } else {
    throw new TypeError('Type Error: Invalid Input')
  }
} catch (e) {
  console.log(e.message);
}
}




// let res = sum(null);
// console.log(res);

// 2.
// tests

// Your code here

const sayName = (name) => {
  try {
    if(typeof name === 'string' ){
      console.log(name);
    }
    else {
      throw new TypeError("Invalid name! Must be a string!")
    }
  } catch (e) {
    console.log(e.message);
  }
}


// sayName("Alex");
// sayName(1);


// 3.
function greet(greeting) {
  try{
  if (typeof greeting === 'string') {
    console.log(greeting);
  } 
  else{
    throw new Error("Hello World!");
  }
} catch (e) {
  console.log(e.message);
}
}


greet('Sup foo')
greet(1)
