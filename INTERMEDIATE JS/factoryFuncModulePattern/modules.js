const calculator = (() => {
    const add = (a, b) => console.log(a + b);
    const sub = (a, b) => console.log(a - b);
    const mul = (a, b) => console.log(a * b);
    const div = (a, b) => console.log(a / b);
    return {
      add,
      sub,
      mul,
      div,
    };
  })();
  
  calculator.add(3,5); // 8
  calculator.sub(6,2); // 4
  calculator.mul(14,5534); // 77476