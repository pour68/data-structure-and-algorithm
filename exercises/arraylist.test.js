let ArrayList = require("./arraylist");

describe("#add", () => {
  test("add value to the end of arraylist", () => {
    const al = new ArrayList();

    al.add(10);
    al.add(100);

    expect(al.count).toBe(2);
  });
});

describe("#insertAt", () => {

  test("check validation of index", () => {
    const al = new ArrayList();

    al.add(10);
    al.add(100);
    al.add(1000);

    let checkIndexLessThanZero = () => {
      return al.insertAt(-1, 1000);
    };

    let checkIndexMoreThanArrayLength = () => {
      return al.insertAt(5, 1000);
    };

    expect(checkIndexLessThanZero).toThrow("enter valid index");
    expect(checkIndexMoreThanArrayLength).toThrow("enter valid index");
  });

  
});
