const Stack = require("./stack");

describe("#push", () => {
  test("push a value at the end of stack", () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(100);
    stack.push(1000);

    expect(stack.length).toBe(3);
  });
});

describe("#pop", () => {
  test("throw exception if stack is empty", () => {
    const stack = new Stack();

    let error = () => {
      return stack.pop();
    };

    expect(error).toThrow("stack is empty.");
  });

  test("remove a value at the end of stack", () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(100);
    stack.push(1000);
    stack.pop();

    expect(stack.length).toBe(2);
  });
});

describe("#contains", () => {
  test("check if an element exist or not exist in stack", () => {
    const stack = new Stack();
    stack.push(10);
    stack.push(100);
    stack.push(1000);

    expect(stack.contains(10)).toBe(true);
    expect(stack.contains(95)).toBe(false);
  });
});
