const callStackBtn = document.getElementById('call-stack');
const exceptionsBtn = document.getElementById('exceptions');git
let topic = 'Debugger with JavaScript';
debugger;

const double = (num) => {
  const res = num * 2;
  return res;
}
const doubled = double(10);
console.log(`Function result: ${doubled}`);

[1,2,3].forEach((num) => console.log(num));

// Block scoped 
if (true) {
  const msg = 'If statements are block scoped';
  console.log(msg);
}

exceptionsBtn.addEventListener('click', function eventHandler() {
  topic = 'Exceptions';
  // Caught exception
  try {
    throw new Error('This is a caught exception.')
  }
  catch(err) {
    console.log(err.message);
  }

  // Uncaught exception
  throw new Error('This is an uncaught exception.');
  console.log('After uncaught error');
});

callStackBtn.addEventListener('click', function eventHandler() {
  topic = 'Call stack';
  const add20 = (num) => {
    let res = num + 20;
    return res;
  }
  const add1 = (num) => {
    let res = num + 1;
    res = add20(res);
    return res;
  }
  const res = add1(0);
  console.log(res);
});
