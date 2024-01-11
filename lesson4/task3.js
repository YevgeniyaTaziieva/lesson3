function createCounter(init) {
    let currentValue = init;
  
    return {
      increment: function () {
        currentValue++;
        return currentValue;
      },
      decrement: function () {
        currentValue--;
        return currentValue;
      },
      reset: function () {
        currentValue = init;
        return currentValue;
      },
    };
  }
  
  // Example 1
  const counter1 = createCounter(5);
  const result1 = [];
  result1.push(counter1.increment());
  result1.push(counter1.reset());
  result1.push(counter1.decrement());
  
  console.log('Example 1:', result1);
  
  // Example 2
  const counter2 = createCounter(0);
  const result2 = [];
  result2.push(counter2.increment());
  result2.push(counter2.increment());
  result2.push(counter2.decrement());
  result2.push(counter2.reset());
  result2.push(counter2.reset());
  
  console.log('Example 2:', result2);
  