function nthFibo(n) {
  if (n < 1) {
    return "введите число больше 0";
  }
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }

  let a = 0;
  let b = 1;
  let fib;

  for (let i = 3; i <= n; i++) {
    fib = a + b;
    a = b; 
    b = fib;
  }

  return fib;
}

console.log('0.5',nthFibo(0.5));
console.log('-1', nthFibo(-1));
console.log('0', nthFibo(0));
console.log('1', nthFibo(1));
console.log('2', nthFibo(2));
console.log('3', nthFibo(3));
console.log('4', nthFibo(4));
console.log('5', nthFibo(5));
